import React from 'react';
import { shallow } from 'enzyme';
import ExpandedCard from '../Feed/ExpandedCard';
import toJson from 'enzyme-to-json';
import firebase from 'firebase';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

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
    }      
  };
const expandedcard= jest.fn();

describe('Testing Add component', () => {
    it('Test if Add renders correctly', () =>{
        jest.fn()
        const tree = shallow(<ExpandedCard {...props}/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('Test if Course renders correctly', () =>{
      const tree = renderer.create(
        <Router><ExpandedCard expandedcard={expandedcard}/></Router>
        )
        expect(toJson(tree)).toMatchSnapshot()
    });
});