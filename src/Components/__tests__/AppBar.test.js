import React from 'react';
import AppBar from '../AppBar/AppBar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing AppBar component', () => {
    it('Test if AppBar renders correctly', () =>{
        const tree = shallow(<AppBar/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});