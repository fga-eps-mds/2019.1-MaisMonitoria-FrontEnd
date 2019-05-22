import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});



describe('Testing ForgotPassword component', () => {
    it('Test if ForgotPassword renders correctly', () =>{
        const tree = shallow(<ForgotPassword/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
    
    
});