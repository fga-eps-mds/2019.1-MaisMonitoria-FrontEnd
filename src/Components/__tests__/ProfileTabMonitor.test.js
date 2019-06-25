import React from 'react';
import ProfileTabMonitor from '../ProfileMonitor/ProfileTabMonitor';

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

let props = {
    tutoring:{
        map: jest.fn()
        
    }
  };

describe('Testing ProfileTabMonitor component', () => {
    it('Test if ProfileTabMonitor renders correctly', () =>{
        jest.fn()
        const tree = shallow(<ProfileTabMonitor {...props}/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
}); 