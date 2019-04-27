import React from 'react';
import { shallow } from 'enzyme';
import EditProfile from '../EditProfile/EditProfile';
import toJson from 'enzyme-to-json';

describe('Testing EditProfile component', () => {
    it('Test if EditProfile renders correctly', () =>{
        const wrapper = shallow(<EditProfile/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});