import React from 'react';
import { shallow } from 'enzyme';
import GenericButtons from '../GenericButtons/GenericButtons';

describe('Testing ForgotPassword component', () => {
    it('Test if ForgotPassword renders correctly', () =>{
        const tree = shallow(<GenericButtons/>);
        expect(tree).toMatchSnapshot();
    });
});