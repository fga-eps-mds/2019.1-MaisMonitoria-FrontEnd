import React from 'react';
import Course from '../EditProfile/Course';
import { shallow } from 'enzyme';


describe('Testing Course component', () => {
  it('Test if card renders correctly', () =>{
      const tree = shallow(<Course/>);
      expect(tree).toMatchSnapshot();
  });
});