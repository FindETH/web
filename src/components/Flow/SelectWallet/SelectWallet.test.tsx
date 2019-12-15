import { shallow } from 'enzyme';
import React from 'react';
import SelectWallet from './SelectWallet';

describe('SelectWallet', () => {
  it('renders', () => {
    expect(shallow(<SelectWallet state={{}} onNext={jest.fn()} />)).toMatchSnapshot();
  });
});
