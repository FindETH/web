import { getDefaultNetwork, Network } from '@findeth/networks';

export interface NetworkState {
  isOnline: boolean;
  isConnected: boolean;
  network: Network;
}

export const INITIAL_STATE: NetworkState = {
  isOnline: false,
  isConnected: false,
  network: getDefaultNetwork()
};
