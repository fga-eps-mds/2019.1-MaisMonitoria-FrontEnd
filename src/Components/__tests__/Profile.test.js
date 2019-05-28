import React from 'react';
import Profile from '../Profile/Profile';
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

const profile = jest.fn();

it('Test if Profile renders correctly', () =>{
  const tree = renderer.create(
    <Router><Profile profile={profile}/></Router>
    )
    expect(toJson(tree)).toMatchSnapshot()
});
