import React from 'react';
import Search from '../Search/Search';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
});

Enzyme.configure({adapter: new Adapter()});

const props = {
    state: {
        
    }
  
};
test('renders correctly' , () => {
  const tree = renderer
  .create(<Search {...props} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

