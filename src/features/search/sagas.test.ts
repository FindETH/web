import { DEFAULT_ETH, LEDGER_LIVE_ETH, MnemonicPhrase } from '@findeth/wallets';
import { DeepPartial } from 'redux';
import { ApplicationState } from '../../store';
import { SerialisedWallet } from '../../types/wallet';
import { recordSaga } from '../../utils/saga';
import { getAddresses, searchSaga } from './sagas';
import { addDerivedAddress, startSearching } from './types';

const wallet = new MnemonicPhrase('test test test test test test test test test test test ball');
const serialisedWallet = wallet.serialize() as SerialisedWallet;

describe('searchSaga', () => {
  it('runs a task that derives addresses for the specified derivation paths', async () => {
    const state: DeepPartial<ApplicationState> = {
      search: {
        wallet: serialisedWallet,
        derivationPaths: [DEFAULT_ETH],
        depth: 2
      }
    };

    const dispatched = await recordSaga(searchSaga, startSearching(), state);
    expect(dispatched).toHaveLength(2);
    expect(dispatched).toContainEqual(
      addDerivedAddress({
        address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
        derivationPath: "m/44'/60'/0'/0/0"
      })
    );
    expect(dispatched).toContainEqual(
      addDerivedAddress({
        address: '0x59A897A2dbd55D20bCC9B52d5eaA14E2859Dc467',
        derivationPath: "m/44'/60'/0'/0/1"
      })
    );
  });
});

describe('getAddresses', () => {
  it('derives addresses for the specified derivation paths', async () => {
    const defaultEth = await recordSaga(getAddresses, { wallet, derivationPaths: [DEFAULT_ETH], depth: 2 }, {});
    expect(defaultEth).toHaveLength(2);
    expect(defaultEth).toContainEqual(
      addDerivedAddress({
        address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
        derivationPath: "m/44'/60'/0'/0/0"
      })
    );
    expect(defaultEth).toContainEqual(
      addDerivedAddress({
        address: '0x59A897A2dbd55D20bCC9B52d5eaA14E2859Dc467',
        derivationPath: "m/44'/60'/0'/0/1"
      })
    );

    const ledgerLiveEth = await recordSaga(getAddresses, { wallet, derivationPaths: [LEDGER_LIVE_ETH], depth: 2 }, {});
    expect(ledgerLiveEth).toHaveLength(2);
    expect(ledgerLiveEth).toContainEqual(
      addDerivedAddress({
        address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
        derivationPath: "m/44'/60'/0'/0/0"
      })
    );
    expect(ledgerLiveEth).toContainEqual(
      addDerivedAddress({
        address: '0x3FE703a2035CB3590C865a09F556eDda02b2Cf12',
        derivationPath: "m/44'/60'/1'/0/0"
      })
    );
  });
});
