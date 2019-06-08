import React from 'react';
import LikeList from '../Feed/Likelist';
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

const likeList = jest.fn();


  it('Test if likedlist renders correctly', () =>{
    const tree = renderer.create(
      <Router><LikeList likeList={likeList}/></Router>
      )
      expect(toJson(tree)).toMatchSnapshot()
  });
