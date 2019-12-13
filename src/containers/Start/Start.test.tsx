import { shallow } from 'enzyme';
import React from 'react';
import Start from './Start';

describe('Start', () => {
  it('renders', () => {
    expect(shallow(<Start />)).toMatchSnapshot();
  });
});
