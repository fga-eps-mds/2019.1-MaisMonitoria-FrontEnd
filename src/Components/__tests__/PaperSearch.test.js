import React from 'react';
import PaperSearch from '../Search/PaperSearch';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing PaperSearch component', () => {
    it('Test if PaperSearch renders correctly', () =>{
        const tree = shallow(<PaperSearch/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
