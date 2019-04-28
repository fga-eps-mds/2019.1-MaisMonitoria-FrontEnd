import React from 'react';
import PaperSearch from '../Search/PaperSearch';
import { shallow } from 'enzyme';

describe('Testing PaperSearch component', () => {
    it('Test if PaperSearch renders correctly', () =>{
        const tree = shallow(<PaperSearch/>);
        expect(tree).toMatchSnapshot();
    });
});
