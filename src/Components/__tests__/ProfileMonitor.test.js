import React from 'react';
import ProfileMonitor from '../ProfileMonitor/ProfileMonitor';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
});

var props = {
    match:{
        params:{
            id_monitor:jest.fn(),
            id_tutoring_session:jest.fn()
        }  
    } 
  };

describe('Testing ProfileTabMonitor component', () => {
    it('Test if ProfileTabMonitor renders correctly', () =>{
        jest.fn()
        const tree = shallow(<ProfileMonitor {...props}/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
}); 