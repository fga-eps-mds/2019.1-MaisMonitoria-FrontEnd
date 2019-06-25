import React from 'react';
import Paper from '../Feed/Paper';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

const paperfeed = jest.fn();

describe('Testing Paper component', () => {
    it('Test if Paper renders correctly', () =>{
        const tree = renderer.create(
            <Router><Paper paperfeed={paperfeed}/></Router>
          )
        expect(toJson(tree)).toMatchSnapshot()
    });
});
