import React from 'react';
import Course from '../EditProfile/Course';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';


const course = jest.fn();


describe('Testing Course component', () => {
  it('Test if Course renders correctly', () =>{
    const tree = renderer.create(
      <Router><Course course={course}/></Router>
      )
      expect(toJson(tree)).toMatchSnapshot()
  });
});