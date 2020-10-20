import { getDefaultNetwork, getVersion } from '@findeth/networks';
import { DeepPartial } from 'redux';
import { ApplicationState } from '../../store';
import { recordSaga } from '../../utils/saga';
import { setNetworkSaga } from './sagas';
import { setConnected, setConnecting, setNetwork, setNetworkError } from './types';

jest.mock('@findeth/networks', () => ({
  getVersion: jest.fn().mockImplementation(async () => 1),
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

  it('dispatches setConnected with false if the network ID is invalid', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    (getVersion as jest.MockedFunction<typeof getVersion>).mockImplementationOnce(async () => 2);

    const dispatched = await recordSaga(setNetworkSaga, setNetwork(getDefaultNetwork()), state);
    expect(dispatched).toContainEqual(setConnected(false));
  });

  it('sets a network error when an error is thrown', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    (getVersion as jest.MockedFunction<typeof getVersion>).mockImplementationOnce(async () => {
      throw new Error('foo');
    });

    const dispatched = await recordSaga(setNetworkSaga, setNetwork(getDefaultNetwork()), state);
    expect(dispatched).toContainEqual(setNetworkError('FindETH could not connect to the specified network.'));
  });

  it('dispatches setConnecting when connecting', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const dispatched = await recordSaga(setNetworkSaga, setNetwork(getDefaultNetwork()), state);
    expect(dispatched).toContainEqual(setConnecting(true));
    expect(dispatched).toContainEqual(setConnecting(false));
  });
});
