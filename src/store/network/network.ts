import { Network } from '@findeth/networks';
import { createAction } from '@reduxjs/toolkit';

export interface NetworkState {
  online: boolean;
  network?: Network;
}

export const INITIAL_STATE: NetworkState = {
  online: true
};

export const setNetwork = createAction<Network | undefined>('network/setNetwork');
export const setOnline = createAction<boolean>('network/setOnline');
