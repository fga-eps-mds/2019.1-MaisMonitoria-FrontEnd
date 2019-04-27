import React from 'react';
import AppBarSearch from '../Search/AppBarSearch';
import { shallow } from 'enzyme';

describe('Testing AppBarSearch component', () => {
    it('Test if AppBarSearch renders correctly', () =>{
        const tree = shallow(<AppBarSearch/>);
        expect(tree).toMatchSnapshot();
    });
});
