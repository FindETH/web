import { shallow } from 'enzyme';
import React from 'react';
import List from './List';

describe('List', () => {
  it('renders', () => {
    expect(shallow(<List />)).toMatchSnapshot();
  });
});
