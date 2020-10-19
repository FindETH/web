import { getDefaultNetwork, Network } from '@findeth/networks';
import { createAction } from '@reduxjs/toolkit';

export interface NetworkState {
  isOnline: boolean;
  isConnected: boolean;
  network: Network;
  networkError?: string;
}

export const INITIAL_STATE: NetworkState = {
  isOnline: false,
  isConnected: false,
  network: getDefaultNetwork()
};

export const setNetwork = createAction<Network>('network/setNetwork');
export const setNetworkError = createAction<string | undefined>('network/setNetworkError');

export const setOnline = createAction<boolean>('network/setOnline');
export const setConnected = createAction<boolean>('network/setConnected');
