import React from 'react';
import Card from '../Feed/Card';
import { shallow } from 'enzyme';

describe('Testing Card component', () => {
    it('Test if card renders correctly', () =>{
        const tree = shallow(<Card/>);
        expect(tree).toMatchSnapshot();
    });
});