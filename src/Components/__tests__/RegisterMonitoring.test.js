import React from 'react';
import RegisterMonitoring from '../RegisterMonitoring/RegisterMonitoring';
import { shallow } from 'enzyme';

describe('Testing RegisterMonitoring component', () => {
    it('Test if RegisterMonitoring renders correctly', () =>{
        const tree = shallow(<RegisterMonitoring/>);
        expect(tree).toMatchSnapshot();
    });
});