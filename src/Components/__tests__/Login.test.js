import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';
import toJson from 'enzyme-to-json';

describe('Testing Login component', () => {
    it('Test if Login renders correctly', () =>{
        const tree = shallow(<Login/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
