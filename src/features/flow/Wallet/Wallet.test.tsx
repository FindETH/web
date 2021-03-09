import { WalletType } from '@findeth/wallets';
import { DeepPartial } from 'redux';
import createMockStore from 'redux-mock-store';
import { ApplicationState } from '../../../store';
import { getComponent } from '../../../utils/test-utils';
import { setWalletType } from '../types';
import Wallet from './Wallet';
import WalletItem from './WalletItem';

const mockStore = createMockStore<DeepPartial<ApplicationState>>();

describe('Wallet', () => {
  it('renders a list with all wallet types', () => {
    const store = mockStore({
      flow: {}
    });

    const component = getComponent(<Wallet onReset={jest.fn} onNext={jest.fn} />, store);
    const walletItems = component.find(WalletItem);

    expect(walletItems).toHaveLength(4);
    expect(walletItems.at(0).text()).toContain('Ledger');
    expect(walletItems.at(1).text()).toContain('Trezor');
    expect(walletItems.at(2).text()).toContain('Mnemonic Phrase');
    expect(walletItems.at(3).text()).toContain('Extended Key');
  });

  it('dispatches setWalletType when a type is selected', () => {
    const store = mockStore({
      flow: {}
    });

    const component = getComponent(<Wallet onReset={jest.fn} onNext={jest.fn} />, store);
    const walletItem = component.find(WalletItem).at(0);

    walletItem.simulate('click');

    expect(store.getActions()).toContainEqual(setWalletType(WalletType.Ledger));
  });

  it('calls onNext when the button is pressed', () => {
    const store = mockStore({
      flow: {
        walletType: WalletType.Ledger
      }
    });

    const fn = jest.fn();
    const component = getComponent(<Wallet onReset={jest.fn} onNext={fn} />, store);
    const walletItem = component.find(WalletItem).at(0);

    walletItem.simulate('click');

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
