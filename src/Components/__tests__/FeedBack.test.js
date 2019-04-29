import React from 'react';
import Feedback from '../Feedback/Feedback';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing Feedback component', () => {
    it('Test if Feedback renders correctly', () =>{
        const tree = shallow(<Feedback/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});