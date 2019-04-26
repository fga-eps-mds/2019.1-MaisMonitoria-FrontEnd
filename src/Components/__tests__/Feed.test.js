import React from 'react';
import Feed from '../Feed/Feed';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing Feed component', () => {
    it('Test if Feed renders correctly', () =>{
        const tree = shallow(<Feed/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});