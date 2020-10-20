import { getEtherBalances, Network } from '@findeth/networks';
import { DerivationPath } from '@findeth/wallets';
import { SagaIterator } from 'redux-saga';
import { all, call, put, race, select, take, takeEvery, fork } from 'redux-saga/effects';
import { ApplicationState } from '../../store';
import { Balance, DerivationResult, SearchType } from '../../types/search';
import { SerialisedWallet } from '../../types/wallet';
import SearchWorker from './search.worker.ts';
import {
  addDerivedAddress,
  completeSearching,
  setCurrentDerivationPath,
  setCurrentIndex,
  startSearching,
  stopSearching
} from './types';

const SEARCH_HANDLERS: Record<SearchType, (result: DerivationResult) => SagaIterator> = {
  [SearchType.ALL]: checkAll,
  [SearchType.ADDRESS]: checkAddress,
  [SearchType.ASSETS]: checkAssets
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

export function* checkAssets(result: DerivationResult): SagaIterator {
  // TODO: Batch addresses
  const network: Network = yield select((state: ApplicationState) => state.network.network);

  const address = result.address;
  const { [result.address]: balance } = yield call(getEtherBalances, network, [address]);

  if (balance > 0) {
    yield put(
      addDerivedAddress({
        ...result,
        balances: {
          native: String(balance) as Balance
        }
      })
    );
  }
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
    yield put(setCurrentDerivationPath(derivationPath));

    for (let index = 0; index < depth; index++) {
      yield put(setCurrentIndex(index));

      const result = yield call([worker, worker.deriveAddress], wallet, derivationPath, index);
      yield fork(handler, result);
    }
  }

  yield put(completeSearching());
}

export function* searchSaga(): SagaIterator {
  const type: SearchType = yield select((state: ApplicationState) => state.search.type);
  const wallet: SerialisedWallet = yield select((state: ApplicationState) => state.search.wallet);
  const derivationPaths: DerivationPath[] = yield select((state: ApplicationState) => state.search.derivationPaths);
  const depth: number = yield select((state: ApplicationState) => state.search.depth);

  yield race([call(getAddresses, { type, wallet, derivationPaths, depth }), take(stopSearching)]);
}

export function* rootSaga(): SagaIterator {
  yield all([takeEvery(startSearching.type, searchSaga)]);
}
