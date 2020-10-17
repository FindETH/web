import { getChainId, Network } from '@findeth/networks';
import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { ApplicationState } from '../../store';
import { setConnected, setOnline } from './types';

export function* setOnlineSaga({ payload }: ReturnType<typeof setOnline>): SagaIterator {
  if (payload) {
    const network: Network = yield select((state: ApplicationState) => state.network.network);
    const chainId: number = yield call(getChainId, network);

    if (chainId === network.chainId) {
      yield put(setConnected(true));
      return;
    }
  }

  yield put(setConnected(false));
}

export function* rootSaga(): SagaIterator {
  yield all([takeLatest(setOnline.type, setOnlineSaga)]);
}
