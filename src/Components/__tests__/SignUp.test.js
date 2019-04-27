import React from 'react';
import SignUp from '../SignUP/SignUp';
import { shallow } from 'enzyme';

describe('Testing SignUp component', () => {
    it('Test if SignUp renders correctly', () =>{
        const tree = shallow(<SignUp/>);
        expect(tree).toMatchSnapshot();
    });
});
