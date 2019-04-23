import React from 'react';
import Feedback from '../Feedback/Feedback';
import { shallow } from 'enzyme';

describe('Testing Feedback component', () => {
    it('Test if feedback renders correctly', () =>{
        const tree = shallow(<Feedback/>);
        expect(tree).toMatchSnapshot();
    });
});