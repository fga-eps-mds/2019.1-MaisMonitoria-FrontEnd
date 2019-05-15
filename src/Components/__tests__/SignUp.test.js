import React from 'react';
import SignUp from '../SignUP/SignUp';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing SignUp component', () => {
    it('Test if SignUp renders correctly', () =>{
        const tree = shallow(<SignUp/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
    // it('allows us to set props', () => {
    //     const wrapper = mount(<SignUp bar="baz" />);
    //     expect(wrapper.props().bar).toMatchSnapshot('baz');
    //     wrapper.setProps({ bar: 'signup' });
    //     expect(wrapper.props().bar).toMatchSnapshot('signup');
    //   });
});
