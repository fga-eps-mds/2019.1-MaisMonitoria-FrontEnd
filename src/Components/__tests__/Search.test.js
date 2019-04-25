import React from 'react';
import Search from '../Search/Search';
import { shallow } from 'enzyme';

describe('Testing Search component', () => {
    it('Test if Search renders correctly', () =>{
        const tree = shallow(<Search/>);
        expect(tree).toMatchSnapshot();
    });
});
