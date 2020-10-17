import { getDefaultNetwork } from '@findeth/networks';
import { networkReducer } from './reducer';
import { INITIAL_STATE, setConnected, setNetwork, setOnline } from './types';

describe('networkReducer', () => {
  it('returns the initial state', () => {
    expect(networkReducer(undefined, { type: '' })).toBe(INITIAL_STATE);
  });

  it('handles setNetwork', () => {
    expect(networkReducer(undefined, setNetwork(getDefaultNetwork()))).toEqual({
      ...INITIAL_STATE,
      network: getDefaultNetwork()
    });
  });

  it('handles setOnline', () => {
    expect(networkReducer(undefined, setOnline(true))).toEqual({
      ...INITIAL_STATE,
      isOnline: true
    });

    expect(networkReducer(undefined, setOnline(false))).toEqual({
      ...INITIAL_STATE,
      isOnline: false
    });
  });

  it('handles setConnected', () => {
    expect(networkReducer(undefined, setConnected(true))).toEqual({
      ...INITIAL_STATE,
      isConnected: true
    });

    expect(networkReducer(undefined, setConnected(false))).toEqual({
      ...INITIAL_STATE,
      isConnected: false
    });
  });
});
