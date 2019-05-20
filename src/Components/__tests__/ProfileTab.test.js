import React from 'react';
import ProfileTab from '../ProfileTab/ProfileTab';
import { shallow , mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing ProfileTab component', () => {
    it('Test if ProfileTab renders correctly', () =>{
        const tree = shallow(<ProfileTab/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('allows us to set props', () => {
        const wrapper = mount(<ProfileTab bar="baz" />);
        expect(wrapper.props().bar).toMatchSnapshot('baz');
        wrapper.setProps({ bar: 'profiletab' });
        expect(wrapper.props().bar).toMatchSnapshot('profiletab');
    });
});