import React from 'react';
import { shallow } from 'enzyme';
import EditProfile from '../EditProfile/EditProfile';

const profile = jest.fn();

describe('Testing EditProfile component', () => {
    it('Test if EditProfile renders correctly', () =>{
        const wrapper = shallow(<EditProfile/>);
        expect(wrapper).toMatchSnapshot();
    });
});