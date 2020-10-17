import { getDefaultNetwork } from '@findeth/networks';
import { DeepPartial } from 'redux';
import { ApplicationState } from '../../store';
import { recordSaga } from '../../utils/saga';
import { setOnlineSaga } from './sagas';
import { setConnected, setOnline } from './types';

jest.mock('@findeth/networks', () => ({
  getChainId: jest
    .fn()
    .mockImplementationOnce(async () => 1)
    .mockImplementationOnce(async () => 2),
  getDefaultNetwork: jest.requireActual('@findeth/networks').getDefaultNetwork
}));

describe('setOnlineSaga', () => {
  it('checks if the node is accessible', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const dispatched = await recordSaga(setOnlineSaga, setOnline(true), state);
    expect(dispatched).toContainEqual(setConnected(true));
  });

  it('dispatches setConnected with false if the chain ID is invalid', async () => {
    const state: DeepPartial<ApplicationState> = {
      network: {
        network: getDefaultNetwork()
      }
    };

    const dispatched = await recordSaga(setOnlineSaga, setOnline(true), state);
    expect(dispatched).toContainEqual(setConnected(false));
  });
});