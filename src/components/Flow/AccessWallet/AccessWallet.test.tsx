import { WalletType } from '@findeth/core';
import { shallow } from 'enzyme';
import React from 'react';
import AccessWallet from './AccessWallet';

describe('AccessWallet', () => {
  it('renders', () => {
    expect(shallow(<AccessWallet state={{ wallet: WalletType.LedgerWebUSB }} onNext={jest.fn()} />)).toMatchSnapshot();
    expect(
      shallow(<AccessWallet state={{ wallet: WalletType.MnemonicPhrase }} onNext={jest.fn()} />)
    ).toMatchSnapshot();
  });
});
