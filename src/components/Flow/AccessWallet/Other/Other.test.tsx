import { WalletType } from '@findeth/core';
import { shallow } from 'enzyme';
import React from 'react';
import Other from './Other';

describe('Other', () => {
  it('renders', () => {
    expect(shallow(<Other type={WalletType.LedgerWebUSB} onDone={jest.fn()} />)).toMatchSnapshot();
    expect(shallow(<Other type={WalletType.Trezor} onDone={jest.fn()} />)).toMatchSnapshot();
  });
});
