import React from 'react';
import AppBarSearch from '../Search/AppBarSearch';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing AppBarSearch component', () => {
    it('Test if AppBarSearch renders correctly', () =>{
        const tree = shallow(<AppBarSearch/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
