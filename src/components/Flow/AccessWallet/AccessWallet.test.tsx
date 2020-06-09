import { WalletType } from '@findeth/wallets';
import { shallow } from 'enzyme';
import React from 'react';
import AccessWallet from './AccessWallet';

describe('AccessWallet', () => {
  it('renders', () => {
    expect(
      shallow(<AccessWallet state={{ wallet: WalletType.Ledger }} onReset={jest.fn()} onNext={jest.fn()} />)
    ).toMatchSnapshot();
    expect(
      shallow(<AccessWallet state={{ wallet: WalletType.Trezor }} onReset={jest.fn()} onNext={jest.fn()} />)
    ).toMatchSnapshot();
  });
});
