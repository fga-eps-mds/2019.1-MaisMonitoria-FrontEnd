import React from 'react';
import AlertDialog from '../SimpleModal/AlertDialog';
import firebase from 'firebase';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import toJson from 'enzyme-to-json';

firebase.initializeApp({
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
});

let props={
    match:{
        params:{
            id_tutoring:jest.fn()    
    }}
};
const alertdialog= jest.fn();

describe('Testing AlertDialog component', () => {
    it('Test if AlertDialog renders correctly', () =>{
        jest.fn();
        const tree = shallow(<AlertDialog {...props}/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('Test if AlertDialog renders correctly', () =>{
      const tree = renderer.create(
        <Router><AlertDialog alertdialog={alertdialog}/></Router>
        )
        expect(toJson(tree)).toMatchSnapshot()
    });
});