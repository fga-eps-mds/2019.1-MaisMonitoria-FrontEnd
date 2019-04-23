import React from 'react';
import Paper from '../Feed/paper';
import { shallow } from 'enzyme';


describe('Testing Paper component', () => {
    it('Test if paper renders correctly', () =>{
        const tree = shallow(<Paper/>);
        expect(tree).toMatchSnapshot();
    });
});

