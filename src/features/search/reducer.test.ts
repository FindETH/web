import { searchReducer } from './reducer';
import { addAddress, addDerivedAddress, INITIAL_STATE, removeAddress, startSearching, stopSearching } from './types';

describe('searchReducer', () => {
  it('returns the initial state', () => {
    expect(searchReducer(undefined, { type: '' })).toBe(INITIAL_STATE);
  });

  it('handles startSearching', () => {
    expect(searchReducer(undefined, startSearching())).toEqual({
      ...INITIAL_STATE,
      isSearching: true
    });
  });

  it('handles stopSearching', () => {
    expect(searchReducer(undefined, stopSearching())).toEqual({
      ...INITIAL_STATE,
      isSearching: false
    });
  });

  it('handles addAddress', () => {
    const state = searchReducer(undefined, addAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'));
    expect(state).toEqual({
      ...INITIAL_STATE,
      addresses: ['0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520']
    });

    expect(searchReducer(state, addAddress('0xDFDD854DaAD30E6E077AEf1c653169968c102E34'))).toEqual({
      ...INITIAL_STATE,
      addresses: ['0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', '0xDFDD854DaAD30E6E077AEf1c653169968c102E34']
    });
  });

  it('handles removeAddress', () => {
    const state = searchReducer(undefined, addAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'));
    expect(state).toEqual({
      ...INITIAL_STATE,
      addresses: ['0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520']
    });

    expect(searchReducer(state, removeAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'))).toEqual({
      ...INITIAL_STATE
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
});
