import React from 'react';
import AppBarWithBack from '../Feed/AppBarWithBack';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { MemoryRouter as Router } from 'react-router-dom';

const appbarwithback = jest.fn();

  it('Test if AppBarrWithBack renders correctly', () =>{
    const tree = renderer.create(
      <Router><AppBarWithBack profile={appbarwithback}/></Router>
      )
      expect(toJson(tree)).toMatchSnapshot()
  });