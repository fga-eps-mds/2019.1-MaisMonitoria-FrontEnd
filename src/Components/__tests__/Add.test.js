import React from 'react';
import { shallow } from 'enzyme';
import Add from '../GenericButtons/Add';

describe('Testing ForgotPassword component', () => {
    it('Test if ForgotPassword renders correctly', () =>{
        const tree = shallow(<Add/>);
        expect(tree).toMatchSnapshot();
    });
});