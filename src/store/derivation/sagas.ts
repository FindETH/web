import { DerivationPath, deserialize, getFullPath, Wallet } from '@findeth/wallets';
import { SagaIterator, Task } from 'redux-saga';
import { all, call, fork, select, takeLatest, put } from 'redux-saga/effects';
import { SerialisedWallet } from '../../types/wallet';
import { ApplicationState } from '../store';
import { addAddress, startSearching } from './actions';

export function* getAddresses(wallet: Wallet, derivationPaths: DerivationPath[], depth: number): SagaIterator {
  for (const derivationPath of derivationPaths) {
    for (let index = 0; index < depth; index++) {
      const address = yield call([wallet, wallet.getAddress], derivationPath, index);
      const result = { address, derivationPath: getFullPath(derivationPath, index) };

      yield put(addAddress(result));
    }
  }
}

export function* searchSaga(): SagaIterator {
  const implementation: SerialisedWallet = yield select((state: ApplicationState) => state.wallet.wallet);
  const derivationPaths: DerivationPath[] = yield select((state: ApplicationState) => state.derivation.derivationPaths);

  const wallet: Wallet = deserialize(implementation);

  // TODO: Task cancellation
  /*const task: Task = */ yield fork(getAddresses, wallet, derivationPaths, 10);
}

export function* rootSaga(): SagaIterator {
  yield all([takeLatest(startSearching.type, searchSaga)]);
}
