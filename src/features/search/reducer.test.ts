import { searchReducer } from './reducer';
import { addAddress, INITIAL_STATE, setAddress, startSearching, stopSearching } from './types';

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

  it('handles setAddress', () => {
    expect(searchReducer(undefined, setAddress('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'))).toEqual({
      ...INITIAL_STATE,
      address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520'
    });
  });

  it('handles addAddress', () => {
    const state = searchReducer(
      undefined,
      addAddress({ address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', derivationPath: `m/44'/60'/0'/0/0` })
    );
    expect(state).toEqual({
      ...INITIAL_STATE,
      addresses: [{ address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', derivationPath: `m/44'/60'/0'/0/0` }]
    });

    expect(
      searchReducer(
        state,
        addAddress({ address: '0xDFDD854DaAD30E6E077AEf1c653169968c102E34', derivationPath: `m/44'/60'/0'/0/1` })
      )
    ).toEqual({
      ...state,
      addresses: [
        { address: '0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', derivationPath: `m/44'/60'/0'/0/0` },
        { address: '0xDFDD854DaAD30E6E077AEf1c653169968c102E34', derivationPath: `m/44'/60'/0'/0/1` }
      ]
    });
  });
});
