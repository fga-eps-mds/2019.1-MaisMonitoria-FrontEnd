import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import Course from '../EditProfile/Course';

const course = jest.fn();

test('Logout renders a snapshot properly', () => {
  const tree = renderer.create(
    <Router><Course course={course}/></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});