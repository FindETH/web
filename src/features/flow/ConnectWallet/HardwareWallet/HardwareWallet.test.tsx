import { WalletType } from '@findeth/wallets';
import createMockStore from 'redux-mock-store';
import Button from '../../../../components/ui/Button';
import { getComponent, wait, waitForComponentToPaint } from '../../../../utils/test-utils';
import HardwareWallet from './HardwareWallet';

const mockConnect = jest.fn().mockImplementation(async () => Promise.resolve());

jest.mock('@findeth/wallets', () => ({
  WalletType: jest.requireActual('@findeth/wallets').WalletType,
  getLedgerTransport: async () => jest.fn().mockImplementation(() => class Transport {}),
  getWalletImplementation: () =>
    jest.fn().mockImplementation(
      () =>
        new (class Mock {
          connect = mockConnect;
        })()
    )
}));

afterEach(() => {
  mockConnect.mockClear();
});

describe('HardwareWallet', () => {
  const mockStore = createMockStore();

  it('connects to a Ledger wallet when the type is Ledger', async () => {
    const store = mockStore({
      wallet: {
        type: WalletType.Ledger
      }
    });

    const fn = jest.fn();
    const component = getComponent(<HardwareWallet onNext={fn} />, store);
    await waitForComponentToPaint(component);

    const button = component.find(Button);
    button.simulate('click');

    await wait();

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('connects to a Trezor wallet when the type is Trezor', async () => {
    const store = mockStore({
      wallet: {
        type: WalletType.Trezor
      }
    });

    const fn = jest.fn();
    const component = getComponent(<HardwareWallet onNext={fn} />, store);
    await waitForComponentToPaint(component);

    const button = component.find(Button);
    button.simulate('click');

    await wait();

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
