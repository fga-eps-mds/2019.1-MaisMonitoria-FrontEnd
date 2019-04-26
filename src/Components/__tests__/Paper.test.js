import React from 'react';
import Paper from '../Feed/Paper';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing Paper component', () => {
    it('Test if Paper renders correctly', () =>{
        const tree = shallow(<Paper/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
