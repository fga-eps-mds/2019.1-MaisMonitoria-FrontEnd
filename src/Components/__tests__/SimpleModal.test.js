import React from 'react';
import Index from '../SimpleModal/index';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing index component', () => {
    it('Test if index renders correctly', () =>{
        const tree = shallow(<Index/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
