import { getDefaultNetwork, getEtherBalances, Network , resolveName } from '@findeth/networks';
import { DerivationPath } from '@findeth/wallets';
import { SagaIterator } from 'redux-saga';
import { all, call, fork, put, race, select, take, takeEvery } from 'redux-saga/effects';
import { ApplicationState } from '../../store';
import { Balance, DerivationResult, SearchType } from '../../types/search';
import { SerialisedWallet } from '../../types/wallet';
import SearchWorker from './search.worker.ts';
import {
  addDerivedAddress,
  Address,
  completeSearching,
  getValidAddresses,
  removeAddress,
  resolveAddress,
  resolveFailed,
  resolveSucceeded,
  setCurrentDerivationPath,
  setCurrentIndex,
  startSearching,
  stopSearching
} from './types';


export function* resolveAddressSaga({ payload }: ReturnType<typeof resolveAddress>): SagaIterator {
  try {
    // TODO: Support other networks for fetching ENS names
    const address: string | undefined = yield call(resolveName, getDefaultNetwork(), payload);
    const addresses: Address[] = yield select((state: ApplicationState) => state.search.addresses);

    if (address) {
      if (addresses.find((item) => item.address === address)) {
        yield put(removeAddress(payload));
        return;
      }

      yield put(resolveSucceeded([payload, address]));
      return;
    }
  } catch (e) {
    // Error can be ignored here
  }

  yield put(resolveFailed(payload));
}

const SEARCH_HANDLERS: Record<SearchType, (result: DerivationResult) => SagaIterator> = {
  [SearchType.ALL]: checkAll,
  [SearchType.ADDRESS]: checkAddress,
  [SearchType.ASSETS]: checkAssets
};

export function* checkAll(result: DerivationResult): SagaIterator {
  yield put(addDerivedAddress(result));
}

export function* checkAddress(result: DerivationResult): SagaIterator {
  const addresses: string[] = yield select(getValidAddresses);

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

  // TODO: Pass variable to worker on construction?
  yield call([worker, worker.setWallet], wallet);

  for (const derivationPath of derivationPaths) {
    yield put(setCurrentDerivationPath(derivationPath));

    for (let index = 0; index < depth; index++) {
      yield put(setCurrentIndex(index));

      const result = yield call([worker, worker.deriveAddress], derivationPath, index);
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
  yield all([takeEvery(startSearching.type, searchSaga), takeEvery(resolveAddress.type, resolveAddressSaga)]);
}
