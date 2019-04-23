import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Feed from '../Feed/Feed';

const feed = jest.fn();

test('Logout renders a snapshot properly', () => {
  const tree = renderer.create(
    <Router><Feed feed={feed}/></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});