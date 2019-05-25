import React from 'react';
import ExpandedCard from '../Feed/ExpandedCard';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { MemoryRouter as Router } from 'react-router-dom';

const expandedcard = jest.fn();

it('Test if ExpandedCard renders correctly', () =>{
    const tree = renderer.create(
        <Router><ExpandedCard profile={expandedcard}/></Router>
    )
    expect(toJson(tree)).toMatchSnapshot()
});