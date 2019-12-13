import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

describe('App', () => {
  it('renders', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
