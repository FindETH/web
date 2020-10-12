import { SagaIterator } from 'redux-saga';
import { all, put, takeLatest, call } from 'redux-saga/effects';
import { initialise, setInitialised } from './actions';

export function* initialiseSaga({ payload }: ReturnType<typeof initialise>): SagaIterator {
  // TODO: Handle errors
  if (payload.isHardwareWallet()) {
    yield call(payload.connect);
  }

  yield put(setInitialised(true));
}

export function* rootSaga(): SagaIterator {
  yield all([takeLatest(initialise.type, initialiseSaga)]);
}
