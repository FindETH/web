import { ALL_DERIVATION_PATHS, DEFAULT_ETH, DerivationPath } from '@findeth/wallets';
import { createAction } from '@reduxjs/toolkit';
import { ApplicationState } from '../../store';
import { DerivationResult, SearchType } from '../../types/search';
import { SerialisedWallet } from '../../types/wallet';

export interface Address {
  address: string;
  isResolving?: boolean;
  isInvalid?: boolean;
}

export interface SearchState {
  isSearching: boolean;
  isComplete: boolean;

  type: SearchType;
  wallet?: SerialisedWallet;
  derivationPaths: DerivationPath[];
  depth: number;

  addresses: Address[];

  currentDerivationPath: DerivationPath;
  currentIndex: number;
  derivedAddresses: DerivationResult[];
}

export const INITIAL_STATE: SearchState = {
  isSearching: false,
  isComplete: false,

  type: SearchType.ADDRESS,

  derivationPaths: ALL_DERIVATION_PATHS,
  depth: 10,

  addresses: [],

  currentDerivationPath: DEFAULT_ETH,
  currentIndex: 0,
  derivedAddresses: []
};

export const setSerialisedWallet = createAction<SerialisedWallet>('search/setSerialisedWallet');

export const setType = createAction<SearchType>('search/setType');
export const setDerivationPaths = createAction<DerivationPath[]>('search/setDerivationPaths');
export const setDepth = createAction<number>('search/setDepth');

export const startSearching = createAction('search/startSearching');
export const stopSearching = createAction('search/stopSearching');
export const completeSearching = createAction('search/completeSearching');

export const addAddress = createAction<string>('search/addAddress');
export const removeAddress = createAction<string>('search/removeAddress');

export const resolveAddress = createAction<string>('search/resolveAddress');
export const resolveSucceeded = createAction<[name: string, address: string]>('search/resolveSucceeded');
export const resolveFailed = createAction<string>('search/resolveFailed');

export const setCurrentDerivationPath = createAction<DerivationPath>('search/setCurrentDerivationPath');
export const setCurrentIndex = createAction<number>('search/setCurrentIndex');
export const addDerivedAddress = createAction<DerivationResult>('search/addDerivedAddress');

export const isLoadingAddresses = (state: ApplicationState): boolean => {
  return state.search.addresses.some((address) => address.isResolving);
};

export const getValidAddresses = (state: ApplicationState): string[] => {
  return state.search.addresses.filter((address) => !address.isInvalid).map(({ address }) => address);
};
