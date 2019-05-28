

import React from 'react';
import AppBarProfile from '../AppBar/AppBarProfile';
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

const appBarProfile= jest.fn();


  it('Test if Course renders correctly', () =>{
    const tree = renderer.create(
      <Router><AppBarProfile appBarProfile={appBarProfile}/></Router>
      )
      expect(toJson(tree)).toMatchSnapshot()
  });