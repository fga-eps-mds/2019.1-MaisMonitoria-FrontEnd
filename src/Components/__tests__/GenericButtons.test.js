import React from 'react';
import { shallow } from 'enzyme';
import GenericButtons from '../GenericButtons/GenericButtons';
import toJson from 'enzyme-to-json';

describe('Testing GenerictButtons component', () => {
    it('Test if GenericButtons renders correctly', () =>{
        const tree = shallow(<GenericButtons/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});