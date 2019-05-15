import React from 'react';
import Paper from '../Feed/Paper';
import toJson from 'enzyme-to-json';
import {shallow, mount } from 'enzyme';


describe('Testing Paper component', () => {
    it('Test if Card renders correctly', () =>{
        const tree = shallow(<Paper/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('allows us to set props', () => {
        const wrapper = mount(<Paper bar="baz" />);
        expect(wrapper.props().bar).toMatchSnapshot('baz');
        wrapper.setProps({ bar: 'paperfeed' });
        expect(wrapper.props().bar).toMatchSnapshot('paperfeed');
      });
    
});
;



