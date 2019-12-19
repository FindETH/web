import { WalletType } from '@findeth/wallets';
import { shallow } from 'enzyme';
import React from 'react';
import MnemonicPhrase from './MnemonicPhrase';

describe('MnemonicPhrase', () => {
  it('renders', () => {
    expect(
      shallow(<MnemonicPhrase wallet={{ type: WalletType.MnemonicPhrase }} onReset={jest.fn()} onDone={jest.fn()} />)
    ).toMatchSnapshot();
  });
});
