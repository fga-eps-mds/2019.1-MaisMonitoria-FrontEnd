import React from 'react';
import Card from '../Feed/Card';
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

const card = jest.fn();


  it('Test if Course renders correctly', () =>{
    const tree = renderer.create(
      <Router><Card card={card}/></Router>
      )
      expect(toJson(tree)).toMatchSnapshot()
  });