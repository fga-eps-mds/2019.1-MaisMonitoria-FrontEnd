import React from 'react';
import AppBar from '../AppBar/AppBar';
import { shallow } from 'enzyme';

describe('Testing AppBar component', () => {
    it('Test if AppBar renders correctly', () =>{
        const tree = shallow(<AppBar/>);
        expect(tree).toMatchSnapshot();
    });
});