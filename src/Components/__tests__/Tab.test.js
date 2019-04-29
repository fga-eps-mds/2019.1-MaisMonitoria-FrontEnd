import React from 'react';
import Tab from '../Tab/Tab';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

const tab = jest.fn();

describe('Testing Tab component', () => {
    it('Test if Tab renders correctly', () =>{
        const tree = renderer.create(
            <Router><Tab tab={tab}/></Router>
          )
        expect(toJson(tree)).toMatchSnapshot();
    });
});
