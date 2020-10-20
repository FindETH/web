import { getVersion } from '@findeth/networks';
import { SagaIterator } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { setConnected, setConnecting, setNetwork, setNetworkError } from './types';

export function* setNetworkSaga({ payload }: ReturnType<typeof setNetwork>): SagaIterator {
  yield put(setConnecting(true));

  try {
    const networkId: number = yield call(getVersion, payload);

    if (networkId === payload.networkId) {
      yield put(setConnected(true));
      return;
    }

    yield put(setConnected(false));
  } catch (error) {
    yield put(setNetworkError('FindETH could not connect to the specified network.'));
  } finally {
    yield put(setConnecting(false));
  }
}

export function* rootSaga(): SagaIterator {
  yield all([takeEvery(setNetwork.type, setNetworkSaga)]);
}
