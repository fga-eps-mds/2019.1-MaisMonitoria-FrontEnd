import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Login from '../Login/Login';
import toJson from 'enzyme-to-json';

const login = jest.fn();

describe('Testing Tab component', () => {
    it('Test if Tab renders correctly', () =>{
        const tree = renderer.create(
            <Router><Login login={login}/></Router>
          )
        expect(toJson(tree)).toMatchSnapshot();
    });
});
