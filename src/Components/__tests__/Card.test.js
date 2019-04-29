import React from 'react';
import Card from '../Feed/Card';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing Card component', () => {
    it('Test if Card renders correctly', () =>{
        const tree = shallow(<Card/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});