import React from 'react';
import Mention from '../Feedback/Mention';
import { shallow } from 'enzyme';

describe('Testing Mention component', () => {
    it('Test if Mention renders correctly', () =>{
        const tree = shallow(<Mention/>);
        expect(tree).toMatchSnapshot();
    });
});