import { getDefaultNetwork } from '@findeth/networks';
import { DEFAULT_ETH, LEDGER_LIVE_ETH } from '@findeth/wallets';
import { DeepPartial } from 'redux';
import { ApplicationState } from '../../store';
import { Balance, SearchType } from '../../types/search';
import { recordSaga } from '../../utils/saga';
import { SERIALISED_WALLET } from './__fixtures__/wallet';
import { checkAddress, checkAll, checkAssets, getAddresses, searchSaga } from './sagas';
import { addDerivedAddress, startSearching } from './types';

jest.mock(
  './search.worker.ts',
  () =>
    class SearchWorker {
      setWallet = jest.requireActual('./search.worker.ts').setWallet;
      deriveAddress = jest.requireActual('./search.worker.ts').deriveAddress;
    }
);

jest.mock('@findeth/networks', () => ({
  getDefaultNetwork: jest.requireActual('@findeth/networks').getDefaultNetwork,
  getEtherBalances: jest.fn().mockImplementation(async (_, addresses: string[]) =>
    addresses.reduce<Record<string, bigint>>(
      (object, address) => ({
        ...object,
        [address]: 1n
      }),
      {}
    )
  )
}));

describe('checkAll', () => {
  it('adds all addresses to the store', async () => {
    const result = await recordSaga(checkAll, {
      address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
      derivationPath: "m/44'/60'/0'/0/0"
    });

    expect(result).toHaveLength(1);
    expect(result).toContainEqual(
      addDerivedAddress({
        address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
        derivationPath: "m/44'/60'/0'/0/0"
      })
    );
  });
});

describe('checkAddress', () => {
  it('adds specific addresses to the store when found', async () => {
    const result = await recordSaga(
      checkAddress,
      { address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf', derivationPath: "m/44'/60'/0'/0/0" },
      {
        search: {
          addresses: ['0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf']
        }
      }
    );

    expect(result).toHaveLength(1);
    expect(result).toContainEqual(
      addDerivedAddress({
        address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
        derivationPath: "m/44'/60'/0'/0/0"
      })
    );

    const resultWithoutAddress = await recordSaga(
      checkAddress,
      { address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf', derivationPath: "m/44'/60'/0'/0/0" },
      {
        search: {
          addresses: []
        }
      }
    );

    expect(resultWithoutAddress).toHaveLength(0);
  });
});

describe('checkAssets', () => {
  it('adds all addresses with funds to the store', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const result = await recordSaga(
      checkAssets,
      {
        address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
        derivationPath: "m/44'/60'/0'/0/0"
      },
      state
    );

    expect(result).toHaveLength(1);
    expect(result).toContainEqual(
      addDerivedAddress({
        address: '0xc6D5a3c98EC9073B54FA0969957Bd582e8D874bf',
        derivationPath: "m/44'/60'/0'/0/0",
        balances: {
          native: '1' as Balance
        }
      })
    );
  });
});

describe('getAddresses', () => {
  it('derives addresses for the specified derivation paths', async () => {
    const defaultEth = await recordSaga(
      getAddresses,
      { type: SearchType.ALL, wallet: SERIALISED_WALLET, derivationPaths: [DEFAULT_ETH], depth: 2 },
      {}
    );

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

    const ledgerLiveEth = await recordSaga(
      getAddresses,
      { type: SearchType.ALL, wallet: SERIALISED_WALLET, derivationPaths: [LEDGER_LIVE_ETH], depth: 2 },
      {}
    );

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

describe('searchSaga', () => {
  it('runs a task that derives addresses for the specified derivation paths', async () => {
    const state: DeepPartial<ApplicationState> = {
      search: {
        type: SearchType.ALL,
        wallet: SERIALISED_WALLET,
        derivationPaths: [DEFAULT_ETH],
        depth: 2
      }
    };

    const dispatched = await recordSaga(searchSaga, startSearching(), state);

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
