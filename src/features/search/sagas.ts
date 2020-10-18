import { DerivationPath, deserialize, getFullPath, Wallet } from '@findeth/wallets';
import { SagaIterator } from 'redux-saga';
import { all, call, fork, put, select, takeEvery } from 'redux-saga/effects';
import { ApplicationState } from '../../store';
import { SerialisedWallet } from '../../types/wallet';
import { addDerivedAddress, startSearching } from './types';

interface GetAddressesAction {
  wallet: Wallet;
  derivationPaths: DerivationPath[];
  depth: number;
}

export function* getAddresses({ wallet, derivationPaths, depth }: GetAddressesAction): SagaIterator {
  for (const derivationPath of derivationPaths) {
    for (let index = 0; index < depth; index++) {
      const address = yield call([wallet, wallet.getAddress], derivationPath, index);
      const result = { address, derivationPath: getFullPath(derivationPath, index) };

      yield put(addDerivedAddress(result));
    }
  }
}

export function* searchSaga(): SagaIterator {
  const implementation: SerialisedWallet = yield select((state: ApplicationState) => state.search.wallet);
  const derivationPaths: DerivationPath[] = yield select((state: ApplicationState) => state.search.derivationPaths);
  const depth: number = yield select((state: ApplicationState) => state.search.depth);

  const wallet: Wallet = deserialize(implementation);

  // TODO: Task cancellation
  /*const task: Task = */ yield fork(getAddresses, { wallet, derivationPaths, depth });
}

export function* rootSaga(): SagaIterator {
  yield all([takeEvery(startSearching.type, searchSaga)]);
}
