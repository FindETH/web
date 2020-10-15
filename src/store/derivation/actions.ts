import { DerivationPath, DerivationResult } from '@findeth/wallets';
import { createAction } from '@reduxjs/toolkit';

export const setFlow = createAction<boolean>('derivation/setFlow');

export const setSearching = createAction<boolean>('derivation/setSearching');
export const startSearching = createAction('derivation/startSearching');

export const setDerivationPaths = createAction<DerivationPath[]>('derivation/setDerivationPaths');

export const setAddress = createAction<string>('derivation/setAddress');
export const addAddress = createAction<DerivationResult>('derivation/addAddress');
