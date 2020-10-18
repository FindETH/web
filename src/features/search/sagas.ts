import { DerivationPath } from '@findeth/wallets';
import { SagaIterator } from 'redux-saga';
import { all, call, fork, put, select, takeEvery } from 'redux-saga/effects';
import { ApplicationState } from '../../store';
import { SerialisedWallet } from '../../types/wallet';
import SearchWorker from './search.worker.ts';
import { addDerivedAddress, startSearching } from './types';

interface GetAddressesAction {
  wallet: SerialisedWallet;
  derivationPaths: DerivationPath[];
  depth: number;
}

export function* getAddresses({ wallet, derivationPaths, depth }: GetAddressesAction): SagaIterator {
  // TODO: Pass serialised wallet to function
  const worker = new SearchWorker();

  for (const derivationPath of derivationPaths) {
    for (let index = 0; index < depth; index++) {
      const result = yield call([worker, worker.deriveAddress], wallet, derivationPath, index);
      yield put(addDerivedAddress(result));
    }
  }
}

export function* searchSaga(): SagaIterator {
  const wallet: SerialisedWallet = yield select((state: ApplicationState) => state.search.wallet);
  const derivationPaths: DerivationPath[] = yield select((state: ApplicationState) => state.search.derivationPaths);
  const depth: number = yield select((state: ApplicationState) => state.search.depth);

  // TODO: Task cancellation
  /*const task: Task = */ yield fork(getAddresses, { wallet, derivationPaths, depth });
}

export function* rootSaga(): SagaIterator {
  yield all([takeEvery(startSearching.type, searchSaga)]);
}
