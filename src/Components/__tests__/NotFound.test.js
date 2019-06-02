import React from 'react';
import NotFound from '../../Notfound';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing NotFound component', () => {
    it('Test if NotFound renders correctly', () =>{
        const tree = shallow(<NotFound/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
