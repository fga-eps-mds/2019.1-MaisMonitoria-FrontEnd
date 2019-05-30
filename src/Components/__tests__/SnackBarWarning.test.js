import React from 'react';
import SnackBarsWarning from '../SimpleModal/SnackBarsWarning';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing SnackbarsSucess component', () => {
    it('Test if SnackbarsSucess renders correctly', () =>{
        const tree = shallow(<SnackBarsWarning/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});