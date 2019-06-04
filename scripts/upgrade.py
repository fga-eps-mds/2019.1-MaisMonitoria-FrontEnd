import os
import requests
import json
import time

serviceName = os.environ['serviceName']
newImage = 'docker:maismonitoria/'+os.environ['serviceImage']+':'+os.environ['tagImage']

# Find stack based on their name
r = requests.get(os.environ['RANCHER_URL'],
                 auth=(os.environ['RANCHER_ACCESS_KEY'], os.environ['RANCHER_SECRET_KEY']))


for i in r.json()['data']:
    if i['name'] == os.environ['serviceName']:
        service = i

launchConfig = service['launchConfig']

# Update launchConfig with newImage
launchConfig['imageUuid'] = newImage

# Construct payload for upgrade
payload = {
    'inServiceStrategy': {
        'batchSize': 1,
        'intervalMillis': 2000,
        'startFirst': False,
        'launchConfig': launchConfig
    }
}
headers = {'content-type': 'application/json'}

# Upgrade the service with payload
r = requests.post(os.environ['RANCHER_URL'] + service['id'] +'?action=upgrade',
                  data=json.dumps(payload), headers=headers,
                  auth=(os.environ['RANCHER_ACCESS_KEY'], os.environ['RANCHER_SECRET_KEY']))

# Pool service upgrade status
state = 'upgrading'
sleep = 30
retry = 10

while (state != 'upgraded'):
    print("service: " + service['name'] + " [upgrading]")
    time.sleep(sleep)
    r = requests.get(os.environ['RANCHER_URL'] + service['id'],
                     auth=(os.environ['RANCHER_ACCESS_KEY'], os.environ['RANCHER_SECRET_KEY']))
    state = r.json()['state']
    retry -= 1
    if (retry <= 0): sys.exit()

print("service: " + service['name'] + " [upgraded]")

# Finish Upgrade
r = requests.post(os.environ['RANCHER_URL'] + service['id'] + '/?action=finishupgrade',
                  headers=headers, auth=(os.environ['RANCHER_ACCESS_KEY'], os.environ['RANCHER_SECRET_KEY']))