import { WalletType } from '@findeth/wallets';
import React from 'react';
import createMockStore from 'redux-mock-store';
import Button from '../../../components/ui/Button';
import { setWalletType } from '../../../store/wallet';
import { getComponent } from '../../../utils/test-utils';
import Wallet from './Wallet';
import WalletItem from './WalletItem';
import { WalletContainer } from './WalletItem/WalletItem.styles';

describe('Wallet', () => {
  const mockStore = createMockStore();

  it('renders a list with all wallet types', () => {
    const store = mockStore({
      wallet: {}
    });

    const component = getComponent(<Wallet onReset={jest.fn} onNext={jest.fn} />, store);
    const walletItems = component.find(WalletItem);

    expect(walletItems).toHaveLength(3);
    expect(walletItems.at(0).text()).toContain('Ledger');
    expect(walletItems.at(1).text()).toContain('MnemonicPhrase');
    expect(walletItems.at(2).text()).toContain('Trezor');
  });

  it('dispatches setWalletType when a type is selected', () => {
    const store = mockStore({
      wallet: {}
    });

    const component = getComponent(<Wallet onReset={jest.fn} onNext={jest.fn} />, store);
    const walletItem = component.find(WalletItem).at(0);

    walletItem.find(WalletContainer).simulate('click');

    expect(store.getActions()).toContainEqual(setWalletType(WalletType.Ledger));
  });

  it('calls onNext when the button is pressed', () => {
    const store = mockStore({
      wallet: {
        type: WalletType.Ledger
      }
    });

    const fn = jest.fn();
    const component = getComponent(<Wallet onReset={jest.fn} onNext={fn} />, store);

    const button = component.find(Button);
    button.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
