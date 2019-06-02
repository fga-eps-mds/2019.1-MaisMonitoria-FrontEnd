import React from 'react';
import EditMonitoring from '../EditMonitoring/EditMonitoring';
import toJson from 'enzyme-to-json';
import firebase from 'firebase';
import { shallow } from 'enzyme';

firebase.initializeApp({
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
});

let props={
    match:{
        params:{
            id_tutoring:jest.fn()    
    }}
};


describe('Testing Add component', () => {
    it('Test if Add renders correctly', () =>{
        jest.fn();
        const tree = shallow(<EditMonitoring{...props}/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
