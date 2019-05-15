import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import toJson from 'enzyme-to-json';

describe('Testing ForgotPassword component', () => {
    it('Test if ForgotPassword renders correctly', () =>{
        const tree = shallow(<ForgotPassword/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});