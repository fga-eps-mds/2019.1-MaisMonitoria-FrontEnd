import React from 'react';
import { shallow } from 'enzyme';
import ExpandedCard from '../Feed/ExpandedCard';
import toJson from 'enzyme-to-json';
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
    match:{
        params:{
            id_tutoring: jest.fn()
        }
    }      // You don't need to define the implementation if it's empty
  };
  
describe('Testing Add component', () => {
    it('Test if Add renders correctly', () =>{
        jest.fn()
        const tree = shallow(<ExpandedCard {...props}/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});