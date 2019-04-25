import React from 'react';
import Paper from '../Feed/Paper';
import { shallow } from 'enzyme';

describe('Testing Paper component', () => {
    it('Test if Paper renders correctly', () =>{
        const tree = shallow(<Paper/>);
        expect(tree).toMatchSnapshot();
    });
});
