import { getChainId, Network } from '@findeth/networks';
import { SagaIterator } from 'redux-saga';
import { all, put, takeLatest, call, select } from 'redux-saga/effects';
import { ApplicationState } from '../store';
import { checkNetwork, setNetwork, setOnline } from './actions';

export function* checkNetworkSaga(): SagaIterator {
  const network: Network = yield select((state: ApplicationState) => state.network.network);
  const chainId: number = yield call(getChainId, network);

  if (chainId === network.chainId) {
    yield put(setOnline(true));
  }
}

export function* rootSaga(): SagaIterator {
  yield all([takeLatest(setNetwork.type, checkNetworkSaga), takeLatest(checkNetwork.type, checkNetworkSaga)]);
}
