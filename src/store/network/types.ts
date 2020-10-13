import { getDefaultNetwork, Network } from '@findeth/networks';

export interface NetworkState {
  isOnline: boolean;
  network: Network;
}

export const INITIAL_STATE: NetworkState = {
  isOnline: false,
  network: getDefaultNetwork()
};
