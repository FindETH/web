import { ALL_DERIVATION_PATHS, DerivationPath, DerivationResult } from '@findeth/wallets';
import { createAction } from '@reduxjs/toolkit';
import { SerialisedWallet } from '../../types/wallet';

export interface SearchState {
  isSearching: boolean;
  wallet?: SerialisedWallet;
  derivationPaths: DerivationPath[];
  addresses: string[];
  derivedAddresses: DerivationResult[];
}

export const INITIAL_STATE: SearchState = {
  isSearching: false,
  derivationPaths: ALL_DERIVATION_PATHS,
  addresses: [],
  derivedAddresses: []
};

export const setSerialisedWallet = createAction<SerialisedWallet>('search/setSerialisedWallet');

export const setDerivationPaths = createAction<DerivationPath[]>('search/setDerivationPaths');

export const startSearching = createAction('search/startSearching');
export const stopSearching = createAction('search/stopSearching');

export const addAddress = createAction<string>('search/addAddress');
export const removeAddress = createAction<string>('search/removeAddress');
export const addDerivedAddress = createAction<DerivationResult>('search/addDerivedAddress');
