import { WalletType } from '@findeth/wallets';
import React from 'react';
import createMockStore from 'redux-mock-store';
import { getComponent, waitForComponentToPaint } from '../../../utils/test-utils';
import InvalidState from '../InvalidState';
import ConnectWallet from './ConnectWallet';
import HardwareWallet from './HardwareWallet';
import MnemonicPhrase from './MnemonicPhrase';

jest.mock('@findeth/wallets', () => ({
  WalletType: jest.requireActual('@findeth/wallets').WalletType,
  getLedgerTransport: async () => jest.fn().mockImplementation(() => class Transport {}),
  getWalletImplementation: () => jest.fn().mockImplementation(() => new (class Mock {})()),
  Ledger: class Ledger {},
  Trezor: class Trezor {},
  MnemonicPhrase: class MnemonicPhrase {}
}));

describe('ConnectWallet', () => {
  const mockStore = createMockStore();

  it('renders the hardware wallet component when type is Ledger', async () => {
    const store = mockStore({
      wallet: {
        type: WalletType.Ledger
      }
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);
    await waitForComponentToPaint(component);

    expect(component.find(HardwareWallet)).toBeDefined();
  });

  it('renders the hardware wallet component when type is Trezor', async () => {
    const store = mockStore({
      wallet: {
        type: WalletType.Trezor
      }
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);
    await waitForComponentToPaint(component);

    expect(component.find(HardwareWallet)).toBeDefined();
  });

  it('renders the mnemonic phrase component when type is MnemonicPhrase', async () => {
    const store = mockStore({
      wallet: {
        type: WalletType.MnemonicPhrase
      }
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);
    await waitForComponentToPaint(component);

    expect(component.find(MnemonicPhrase)).toBeDefined();
  });

  it('renders invalid state when no type is set', async () => {
    const store = mockStore({
      wallet: {}
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);

    expect(component.find(InvalidState)).toBeDefined();
  });
});
