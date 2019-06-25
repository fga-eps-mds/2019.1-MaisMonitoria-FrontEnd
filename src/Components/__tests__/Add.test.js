import React from 'react';
import { shallow } from 'enzyme';
import Add from '../GenericButtons/Add';
import toJson from 'enzyme-to-json';

describe('Testing Add component', () => {
    it('Test if Add renders correctly', () =>{
        const tree = shallow(<Add/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});