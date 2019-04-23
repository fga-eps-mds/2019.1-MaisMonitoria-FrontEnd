import React from 'react';
import Feed from '../Feed/Feed';
import { shallow } from 'enzyme';

const feed = jest.fn();

describe('Testing Feed component', () => {
    it('Test if Feed renders correctly', () =>{
        const tree = shallow(<Feed/>);
        expect(tree).toMatchSnapshot();
    });
});