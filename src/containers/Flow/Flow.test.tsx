import { shallow } from 'enzyme';
import React from 'react';
import Flow from './Flow';

describe('Flow', () => {
  it('renders', () => {
    expect(shallow(<Flow flow="ether" />)).toMatchSnapshot();
  });
});
