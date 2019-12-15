import { shallow } from 'enzyme';
import React from 'react';
import Ledger from './Ledger';

describe('Ledger', () => {
  it('renders', () => {
    expect(shallow(<Ledger onSelect={jest.fn()} />)).toMatchSnapshot();
  });
});
