import { getDefaultNetwork } from '@findeth/networks';
import { DeepPartial } from 'redux';
import { ApplicationState } from '../../store';
import { recordSaga } from '../../utils/saga';
import { setNetworkSaga } from './sagas';
import { setConnected, setNetwork, setNetworkError } from './types';

jest.mock('@findeth/networks', () => ({
  getChainId: jest
    .fn()
    .mockImplementationOnce(async () => 1)
    .mockImplementationOnce(async () => 2)
    .mockImplementation(async () => {
      throw new Error('foo');
    }),
  getDefaultNetwork: jest.requireActual('@findeth/networks').getDefaultNetwork
}));

describe('setNetworkSaga', () => {
  it('checks if the node is accessible', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const dispatched = await recordSaga(setNetworkSaga, setNetwork(getDefaultNetwork()), state);
    expect(dispatched).toContainEqual(setConnected(true));
  });

  it('dispatches setConnected with false if the chain ID is invalid', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const dispatched = await recordSaga(setNetworkSaga, setNetwork(getDefaultNetwork()), state);
    expect(dispatched).toContainEqual(setConnected(false));
  });

  it('sets a network error when an error is thrown', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const dispatched = await recordSaga(setNetworkSaga, setNetwork(getDefaultNetwork()), state);
    expect(dispatched).toContainEqual(setNetworkError('FindETH could not connect to the specified network.'));
  });
});
