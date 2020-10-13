import { getDefaultNetwork } from '@findeth/networks';
import { DeepPartial } from 'redux';
import { recordSaga } from '../../utils/saga';
import { ApplicationState } from '../store';
import { checkNetwork, setOnline } from './actions';
import { checkNetworkSaga } from './sagas';

jest.mock('@findeth/networks', () => ({
  getChainId: jest
    .fn()
    .mockImplementationOnce(async () => 1)
    .mockImplementationOnce(async () => 2),
  getDefaultNetwork: jest.requireActual('@findeth/networks').getDefaultNetwork
}));

describe('checkNetworkSaga', () => {
  it('checks if the network is accessible', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const dispatched = await recordSaga(checkNetworkSaga, checkNetwork(), state);
    expect(dispatched).toContainEqual(setOnline(true));
  });

  it('doesn\'t do anything when the chain ID is invalid', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const dispatched = await recordSaga(checkNetworkSaga, checkNetwork(), state);
    expect(dispatched).toHaveLength(0);
  });
});
