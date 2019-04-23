import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

describe('Testing ForgotPassword component', () => {
    it('Test if ForgotPassword renders correctly', () =>{
        const tree = shallow(<ForgotPassword/>);
        expect(tree).toMatchSnapshot();
    });
});