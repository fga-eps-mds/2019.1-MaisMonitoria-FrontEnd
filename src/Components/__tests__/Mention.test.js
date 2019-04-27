import React from 'react';
import Mention from '../Feedback/Mention';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

const metion = jest.fn();


describe('Testing Mention component', () => {
    it('Test if Mention renders correctly', () =>{
        const tree = renderer.create(
            <Router><Mention metion={metion}/></Router>
          )
        expect(toJson(tree)).toMatchSnapshot()
    });
});