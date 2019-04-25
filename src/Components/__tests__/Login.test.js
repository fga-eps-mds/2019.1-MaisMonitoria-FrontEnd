import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';

describe('Testing Login component', () => {
    it('Test if Login renders correctly', () =>{
        const tree = shallow(<Login/>);
        expect(tree).toMatchSnapshot();
    });
});