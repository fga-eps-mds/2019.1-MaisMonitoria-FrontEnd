import React from 'react';
import EditProfile from '../EditProfile/EditProfile';
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

const editprofile = jest.fn();


  it('Test if Course renders correctly', () =>{
    const tree = renderer.create(
      <Router><EditProfile editprofile={editprofile}/></Router>
      )
      expect(toJson(tree)).toMatchSnapshot()
  });
