import React from 'react';
import SnackbarsSucess from '../SimpleModal/SnackbarsSucess';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing SnackbarsSucess component', () => {
    it('Test if SnackbarsSucess renders correctly', () =>{
        const tree = shallow(<SnackbarsSucess/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});