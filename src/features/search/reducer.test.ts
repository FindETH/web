import { LEDGER_DERIVATION_PATHS, LEDGER_ETH } from '@findeth/wallets';
import { SearchType } from '../../types/search';
import { SerialisedWallet } from '../../types/wallet';
import { searchReducer } from './reducer';
import {
  addAddress,
  addDerivedAddress,
  completeSearching,
  INITIAL_STATE,
  removeAddress,
  resolveAddress,
  resolveFailed,
  resolveSucceeded,
  setCurrentDerivationPath,
  setCurrentIndex,
  setDepth,
  setDerivationPaths,
  setSerialisedWallet,
  setType,
  startSearching,
  stopSearching
} from './types';

describe('searchReducer', () => {
  it('returns the initial state', () => {
    expect(searchReducer(undefined, { type: '' })).toBe(INITIAL_STATE);
  });

  it('handles startSearching', () => {
    expect(searchReducer(undefined, startSearching())).toEqual({
      ...INITIAL_STATE,
      isSearching: true,
      isComplete: false
    });
  });

  it('handles stopSearching', () => {
    expect(searchReducer(undefined, stopSearching())).toEqual({
      ...INITIAL_STATE,
      isSearching: false
    });
  });

  it('handles completeSearching', () => {
    expect(searchReducer(undefined, completeSearching())).toEqual({
      ...INITIAL_STATE,
      isSearching: false,
      isComplete: true
    });
  });

  it('handles setSerialisedWallet', () => {
    expect(searchReducer(undefined, setSerialisedWallet('{"type":"Trezor"}' as SerialisedWallet))).toEqual({
      ...INITIAL_STATE,
      wallet: '{"type":"Trezor"}'
    });
  });

  it('handles setType', () => {
    expect(searchReducer(undefined, setType(SearchType.ASSETS))).toEqual({
      ...INITIAL_STATE,
      type: SearchType.ASSETS
    });
  });

  it('handles setDerivationPaths', () => {
    expect(searchReducer(undefined, setDerivationPaths(LEDGER_DERIVATION_PATHS))).toEqual({
      ...INITIAL_STATE,
      derivationPaths: LEDGER_DERIVATION_PATHS
    });
  });

  it('handles setDepth', () => {
    expect(searchReducer(undefined, setDepth(5))).toEqual({
      ...INITIAL_STATE,
      depth: 5
    });
  });

  it('handles addAddress', () => {
    const state = searchReducer(undefined, addAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'));
    expect(state).toEqual({
      ...INITIAL_STATE,
      addresses: [
        {
          address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'
        }
      ]
    });

    expect(searchReducer(state, addAddress('0xDFDD854DaAD30E6E077AEf1c653169968c102E34'))).toEqual({
      ...INITIAL_STATE,
      addresses: [
        { address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520' },
        { address: '0xDFDD854DaAD30E6E077AEf1c653169968c102E34' }
      ]
    });
  });

  it('handles removeAddress', () => {
    const state = searchReducer(undefined, addAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'));
    expect(state).toEqual({
      ...INITIAL_STATE,
      addresses: [
        {
          address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'
        }
      ]
    });

    expect(searchReducer(state, removeAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'))).toEqual({
      ...INITIAL_STATE
    });
  });

  it('handles resolveAddress', () => {
    const initialState = searchReducer(undefined, addAddress('foo.eth'));
    const state = searchReducer(initialState, resolveAddress('foo.eth'));
    expect(state).toEqual({
      ...initialState,
      addresses: [
        {
          address: 'foo.eth',
          isResolving: true
        }
      ]
    });
  });

  it('handles resolveSucceeded', () => {
    const initialState = searchReducer(searchReducer(undefined, addAddress('foo.eth')), resolveAddress('foo.eth'));
    const state = searchReducer(
      initialState,
      resolveSucceeded(['foo.eth', '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'])
    );
    expect(state).toEqual({
      ...initialState,
      addresses: [
        {
          address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520',
          isResolving: false
        }
      ]
    });
  });

  it('handles resolveFailed', () => {
    const initialState = searchReducer(searchReducer(undefined, addAddress('foo.eth')), resolveAddress('foo.eth'));
    const state = searchReducer(initialState, resolveFailed('foo.eth'));
    expect(state).toEqual({
      ...initialState,
      addresses: [
        {
          address: 'foo.eth',
          isResolving: false,
          isInvalid: true
        }
      ]
    });
  });

  it('handles addDerivedAddress', () => {
    const state = searchReducer(
      undefined,
      addDerivedAddress({ address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', derivationPath: `m/44'/60'/0'/0/0` })
    );
    expect(state).toEqual({
      ...INITIAL_STATE,
      derivedAddresses: [{ address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', derivationPath: `m/44'/60'/0'/0/0` }]
    });

    expect(
      searchReducer(
        state,
        addDerivedAddress({ address: '0xDFDD854DaAD30E6E077AEf1c653169968c102E34', derivationPath: `m/44'/60'/0'/0/1` })
      )
    ).toEqual({
      ...state,
      derivedAddresses: [
        { address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', derivationPath: `m/44'/60'/0'/0/0` },
        { address: '0xDFDD854DaAD30E6E077AEf1c653169968c102E34', derivationPath: `m/44'/60'/0'/0/1` }
      ]
    });
  });

  it('handles setCurrentDerivationPath', () => {
    expect(searchReducer(undefined, setCurrentDerivationPath(LEDGER_ETH))).toEqual({
      ...INITIAL_STATE,
      currentDerivationPath: LEDGER_ETH
    });
  });

  it('handles setCurrentIndex', () => {
    expect(searchReducer(undefined, setCurrentIndex(1))).toEqual({
      ...INITIAL_STATE,
      currentIndex: 1
    });
  });
});
