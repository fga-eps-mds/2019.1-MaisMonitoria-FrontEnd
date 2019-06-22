import React from 'react';
import ProfileMonitor from '../ProfileMonitor/ProfileMonitor';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
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
        }  
    } 
  };
  const profilemonitor= jest.fn();

describe('Testing ProfileMonitor component', () => {
    it('Test if ProfileMonitor renders correctly', () =>{
        jest.fn()
        const tree = shallow(<ProfileMonitor {...props}/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
}); 