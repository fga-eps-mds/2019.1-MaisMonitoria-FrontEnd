import React from 'react';
import ModifyPassword from '../ModifyPassword/ModifyPassword';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing ModifyPassword component', () => {
    it('Test if ModifyPassword renders correctly', () =>{
        const tree = shallow(<ModifyPassword/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});