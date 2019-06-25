import React from 'react';
import App from '../../App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing App component', () => {
    it('Test if App renders correctly', () =>{
        const tree = shallow(<App/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
