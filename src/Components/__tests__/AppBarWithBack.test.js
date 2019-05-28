import React from 'react';
import AppBar from '../Feed/AppBarWithBack';
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

const appBar = jest.fn();


  it('Test if Course renders correctly', () =>{
    const tree = renderer.create(
      <Router><AppBar appBar={appBar}/></Router>
      )
      expect(toJson(tree)).toMatchSnapshot()
  });
