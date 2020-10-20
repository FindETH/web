import { getDefaultNetwork } from '@findeth/networks';
import { WalletType } from '@findeth/wallets';
import { DeepPartial } from 'redux';
import createMockStore from 'redux-mock-store';
import Button from '../../../components/Button';
import { ApplicationState } from '../../../store';
import { SerialisedWallet } from '../../../types/wallet';
import { getComponent, waitForComponentToPaint } from '../../../utils/test-utils';
import { setDerivationPaths, setSerialisedWallet } from '../../search';
import InvalidState from '../InvalidState';
import ConnectWallet from './ConnectWallet';
import HardwareWallet from './HardwareWallet';
import MnemonicWallet from './MnemonicWallet';

jest.mock('@findeth/wallets', () => ({
  WalletType: jest.requireActual('@findeth/wallets').WalletType,
  getLedgerTransport: async () => jest.fn().mockImplementation(() => class Transport {}),
  getWalletImplementation: () =>
    jest.fn().mockImplementation(
      () =>
        new (class Mock {
          connect = () => Promise.resolve();
          serialize = () =>
            JSON.stringify({
              type: 'Ledger'
            });
          getDerivationPaths = () => [
            {
              name: 'Default (ETH)',
              path: "m/44'/60'/0'/0/<account>"
            }
          ];
        })()
    ),
  Ledger: class Ledger {},
  Trezor: class Trezor {},
  MnemonicPhrase: class MnemonicPhrase {}
}));

const mockStore = createMockStore<DeepPartial<ApplicationState>>();

describe('ConnectWallet', () => {
  it('renders the hardware wallet component when type is Ledger', async () => {
    const store = mockStore({
      flow: {
        walletType: WalletType.Ledger
      },
      network: {
        network: getDefaultNetwork()
      }
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);
    await waitForComponentToPaint(component);

    expect(component.find(HardwareWallet)).toHaveLength(1);
  });

  it('renders the hardware wallet component when type is Trezor', async () => {
    const store = mockStore({
      flow: {
        walletType: WalletType.Trezor
      },
      network: {
        network: getDefaultNetwork()
      }
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);
    await waitForComponentToPaint(component);

    expect(component.find(HardwareWallet)).toHaveLength(1);
  });

  it('renders the mnemonic phrase component when type is MnemonicPhrase', async () => {
    const store = mockStore({
      flow: {
        walletType: WalletType.MnemonicPhrase
      },
      network: {
        network: getDefaultNetwork()
      }
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);
    await waitForComponentToPaint(component);

    expect(component.find(MnemonicWallet)).toHaveLength(1);
  });

  it('renders invalid state when no type is set', async () => {
    const store = mockStore({
      flow: {},
      network: {
        network: getDefaultNetwork()
      }
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);
    await waitForComponentToPaint(component);

    expect(component.find(InvalidState)).toHaveLength(1);
  });

  it('sets the implementation and derivation paths in the Redux store', async () => {
    const store = mockStore({
      flow: {
        walletType: WalletType.Ledger
      },
      network: {
        network: getDefaultNetwork()
      }
    });

    const component = getComponent(<ConnectWallet onReset={jest.fn} onNext={jest.fn} />, store);
    await waitForComponentToPaint(component);

    const wallet = component.find(HardwareWallet);
    const button = wallet.find(Button);
    button.simulate('click');

    await waitForComponentToPaint(component);

    expect(store.getActions()).toContainEqual(
      setSerialisedWallet(
        JSON.stringify({
          type: 'Ledger'
        }) as SerialisedWallet
      )
    );
    expect(store.getActions()).toContainEqual(
      setDerivationPaths([
        {
          name: 'Default (ETH)',
          path: "m/44'/60'/0'/0/<account>"
        }
      ])
    );
  });
});
