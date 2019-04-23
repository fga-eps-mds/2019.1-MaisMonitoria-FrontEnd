import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import EditProfile from '../EditProfile/EditProfile';

const profile = jest.fn();

test('Logout renders a snapshot properly', () => {
  const tree = renderer.create(
    <Router><EditProfile profile={profile}/></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});