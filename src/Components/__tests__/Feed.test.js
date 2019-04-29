import React from 'react';
import Feed from '../Feed/Feed';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

const telafeed = jest.fn();


describe('Testing Feed component', () => {
    it('Test if Feed renders correctly', () =>{
        const tree = renderer.create(
            <Router><Feed telafeed={telafeed}/></Router>
          )
        expect(toJson(tree)).toMatchSnapshot()
    });
});