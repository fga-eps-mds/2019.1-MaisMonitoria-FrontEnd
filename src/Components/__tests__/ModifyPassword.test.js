import React from 'react';
import ModifyPassword from '../ModifyPassword/ModifyPassword';
import { shallow } from 'enzyme';

describe('Testing ModifyPassword component', () => {
    it('Test if ModifyPassword renders correctly', () =>{
        const tree = shallow(<ModifyPassword/>);
        expect(tree).toMatchSnapshot();
    });
});