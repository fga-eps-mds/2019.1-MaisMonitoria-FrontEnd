import React from 'react';
import Spinner from '../Loader/Spinner';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing Spinner component', () => {
    it('Test if Spinner renders correctly', () =>{
        const tree = shallow(<Spinner/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
