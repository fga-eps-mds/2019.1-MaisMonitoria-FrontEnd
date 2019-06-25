import React from 'react';
import Snackbars from '../SimpleModal/Snackbars';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing Snackbars component', () => {
    it('Test if Snackbars renders correctly', () =>{
        const tree = shallow(<Snackbars/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});