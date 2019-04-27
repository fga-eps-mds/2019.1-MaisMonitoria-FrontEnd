import React from 'react';
import SignUp from '../SignUP/SignUp';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing SignUp component', () => {
    it('Test if SignUp renders correctly', () =>{
        const tree = shallow(<SignUp/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
