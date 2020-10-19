import { DerivationPath, DerivationResult } from '@findeth/wallets';
import { SagaIterator } from 'redux-saga';
import { all, call, fork, put, select, takeEvery } from 'redux-saga/effects';
import { ApplicationState } from '../../store';
import { SearchType } from '../../types/search';
import { SerialisedWallet } from '../../types/wallet';
import SearchWorker from './search.worker.ts';
import { addDerivedAddress, startSearching } from './types';

const SEARCH_HANDLERS: Record<SearchType, (result: DerivationResult) => SagaIterator> = {
  [SearchType.ALL]: checkAll,
  [SearchType.ADDRESS]: checkAddress,
  [SearchType.ETHER]: checkEther
};

export function* checkAll(result: DerivationResult): SagaIterator {
  yield put(addDerivedAddress(result));
}

export function* checkAddress(result: DerivationResult): SagaIterator {
  const addresses: string[] = yield select((state: ApplicationState) => state.search.addresses);

  // TODO: Make sure all addresses are checksummed
  if (addresses.includes(result.address)) {
    yield put(addDerivedAddress(result));
  }
}

export function* checkEther(result: DerivationResult): SagaIterator {
  // TODO
  yield put(addDerivedAddress(result));
}

interface GetAddressesAction {
  type: SearchType;
  wallet: SerialisedWallet;
  derivationPaths: DerivationPath[];
  depth: number;
}

export function* getAddresses({ type, wallet, derivationPaths, depth }: GetAddressesAction): SagaIterator {
  const worker = new SearchWorker();
  const handler = SEARCH_HANDLERS[type];

  for (const derivationPath of derivationPaths) {
    for (let index = 0; index < depth; index++) {
      const result = yield call([worker, worker.deriveAddress], wallet, derivationPath, index);
      yield call(handler, result);
    }
  }
}

export function* searchSaga(): SagaIterator {
  const type: SearchType = yield select((state: ApplicationState) => state.search.type);
  const wallet: SerialisedWallet = yield select((state: ApplicationState) => state.search.wallet);
  const derivationPaths: DerivationPath[] = yield select((state: ApplicationState) => state.search.derivationPaths);
  const depth: number = yield select((state: ApplicationState) => state.search.depth);

  // TODO: Task cancellation
  /*const task: Task = */ yield fork(getAddresses, { type, wallet, derivationPaths, depth });
}

export function* rootSaga(): SagaIterator {
  yield all([takeEvery(startSearching.type, searchSaga)]);
}
