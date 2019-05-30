import React from 'react';
import ProfileTab from '../ProfileTab/ProfileTab';

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
        
    }      // You don't need to define the implementation if it's empty
  };

describe('Testing Add component', () => {
    it('Test if Add renders correctly', () =>{
        jest.fn()
        const tree = shallow(<ProfileTab {...props}/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
}); 