import React from 'react';
import SignUp from '../SignUP/SignUp';
import toJson from 'enzyme-to-json';
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

const signUp = jest.fn();

it('Test if SignUp renders correctly', () =>{
  const tree = renderer.create(
    <Router><SignUp signUp={signUp}/></Router>
    )
    expect(toJson(tree)).toMatchSnapshot()
});
