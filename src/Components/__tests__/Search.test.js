import React from 'react';
import Search from '../Search/Search';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
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

Enzyme.configure({adapter: new Adapter()});

const search = jest.fn();

it('Test if Search renders correctly', () =>{
  const tree = renderer.create(
    <Router><Search search={search}/></Router>
    )
    expect(toJson(tree)).toMatchSnapshot()
});

