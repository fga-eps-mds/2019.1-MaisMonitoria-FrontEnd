import React from 'react';
import Card from '../Feed/Card';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('Testing Card component', () => {
    it('Test if Card renders correctly', () =>{
        const tree = shallow(<Card/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('allows us to set props', () => {
        const wrapper = mount(<Card bar="baz" />);
        expect(wrapper.props().bar).toMatchSnapshot('baz');
        wrapper.setProps({ bar: 'card' });
        expect(wrapper.props().bar).toMatchSnapshot('card');
      });
});