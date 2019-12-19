import { WalletType } from '@findeth/wallets';
import { shallow } from 'enzyme';
import React from 'react';
import Other from './Other';

describe('Other', () => {
  it('renders', () => {
    expect(
      shallow(<Other wallet={{ type: WalletType.Ledger }} onReset={jest.fn()} onDone={jest.fn()} />)
    ).toMatchSnapshot();
    expect(
      shallow(<Other wallet={{ type: WalletType.Trezor }} onReset={jest.fn()} onDone={jest.fn()} />)
    ).toMatchSnapshot();
  });
});
