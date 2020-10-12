import { MnemonicPhrase, Trezor } from '@findeth/wallets';
import { recordSaga } from '../../utils/saga';
import { initialise, setInitialised } from './actions';
import { initialiseSaga } from './sagas';

jest.mock('@findeth/wallets', () => ({
  MnemonicPhrase: class {
    isHardwareWallet = jest.fn().mockImplementation(() => false);
  },

  Trezor: class {
    isHardwareWallet = jest.fn().mockImplementation(() => true);
    connect = jest.fn();
  }
}));

const MNEMONIC_PHRASE = 'test test test test test test test test test test test ball';

describe('initialiseSaga', () => {
  it('connects to a wallet if the wallet is a hardware wallet', async () => {
    const wallet = new Trezor();
    const dispatched = await recordSaga(initialiseSaga, initialise(wallet));

    expect(wallet.connect).toHaveBeenCalledTimes(1);
    expect(dispatched).toContainEqual(setInitialised(true));
  });

  it('initialises a mnemonic phrase', async () => {
    const wallet = new MnemonicPhrase(MNEMONIC_PHRASE);
    const dispatched = await recordSaga(initialiseSaga, initialise(wallet));

    expect(dispatched).toContainEqual(setInitialised(true));
  });
});
