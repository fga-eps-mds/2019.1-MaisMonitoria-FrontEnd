import React from 'react';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import toJson from 'enzyme-to-json';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';


const forgotpassword = jest.fn();

describe('Testing Tab component', () => {
    it('Test if Tab renders correctly', () =>{
        const tree = renderer.create(
            <Router><ForgotPassword forgotpassword={forgotpassword}/></Router>
          )
        expect(toJson(tree)).toMatchSnapshot();
    });
});