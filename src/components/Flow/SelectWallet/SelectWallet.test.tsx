import { shallow } from 'enzyme';
import React from 'react';
import SelectWallet from './SelectWallet';

describe('SelectWallet', () => {
  it('renders', () => {
    expect(shallow(<SelectWallet state={{}} onReset={jest.fn()} onNext={jest.fn()} />)).toMatchSnapshot();
  });
});
