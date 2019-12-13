import { shallow } from 'enzyme';
import React from 'react';
import EtherFlow from './EtherFlow';

describe('Flow', () => {
  it('renders', () => {
    expect(shallow(<EtherFlow />)).toMatchSnapshot();
  });
});
