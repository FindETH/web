import { WalletType } from '@findeth/wallets';
import Button from '../../../../components/Button';
import { getComponent, mockStore, wait, waitForComponentToPaint } from '../../../../utils/test-utils';
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

const spy = jest.spyOn(console, 'error').mockImplementation(() => undefined);

afterEach(() => {
  mockConnect.mockClear();
});

describe('HardwareWallet', () => {
  it('connects to a Ledger wallet when the type is Ledger', async () => {
    const store = mockStore({
      flow: {
        walletType: WalletType.Ledger
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
      flow: {
        walletType: WalletType.Trezor
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

  it('shows an error message if an error occurs', async () => {
    mockConnect.mockImplementationOnce(async () => {
      throw new Error();
    });

    const store = mockStore({
      flow: {
        walletType: WalletType.Ledger
      }
    });

    const component = getComponent(<HardwareWallet onNext={jest.fn()} />, store);
    await waitForComponentToPaint(component);

    const button = component.find(Button);
    button.simulate('click');

    await waitForComponentToPaint(component);
    component.update();

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
