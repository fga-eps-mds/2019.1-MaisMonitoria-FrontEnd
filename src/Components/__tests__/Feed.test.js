import React from 'react';
import Feed from '../Feed/Feed';
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

const feed = jest.fn();


  it('Test if Feed renders correctly', () =>{
    const tree = renderer.create(
      <Router><Feed feed={feed}/></Router>
      )
      expect(toJson(tree)).toMatchSnapshot()
  });
