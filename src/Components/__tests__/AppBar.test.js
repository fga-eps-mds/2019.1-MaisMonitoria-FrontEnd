import React from 'react';
import AppBar from '../AppBar/AppBar';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing AppBar component', () => {
    it('Test if AppBar renders correctly', () =>{
        const tree = shallow(<AppBar/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('allows us to set props', () => {
        const wrapper = mount(<AppBar bar="baz" />);
        expect(wrapper.props().bar).toMatchSnapshot('baz');
        wrapper.setProps({ bar: 'appbar' });
        expect(wrapper.props().bar).toMatchSnapshot('appbar');
    });
});