import React from 'react';
import Course from '../EditProfile/Course';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing Course component', () => {
  it('Test if Course renders correctly', () =>{
      const tree = shallow(<Course/>);
      expect(toJson(tree)).toMatchSnapshot();
  });
});