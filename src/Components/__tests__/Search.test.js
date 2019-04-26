import React from 'react';
import Search from '../Search/Search';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing Search component', () => {
    it('Test if Search renders correctly', () =>{
        const tree = shallow(<Search/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
