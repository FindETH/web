import { createReducer } from '@reduxjs/toolkit';
import {
  addAddress,
  addDerivedAddress,
  INITIAL_STATE,
  removeAddress,
  setDepth,
  setDerivationPaths,
  startSearching,
  stopSearching
} from './types';

export const searchReducer = createReducer(INITIAL_STATE, builder =>
  builder
    .addCase(startSearching, state => ({
      ...state,
      isSearching: true
    }))
    .addCase(stopSearching, state => ({
      ...state,
      isSearching: false
    }))
    .addCase(setDerivationPaths, (state, action) => ({
      ...state,
      derivationPaths: action.payload
    }))
    .addCase(setDepth, (state, action) => ({
      ...state,
      depth: action.payload
    }))
    .addCase(addAddress, (state, action) => ({
      ...state,
      addresses: [...state.addresses, action.payload]
    }))
    .addCase(removeAddress, (state, action) => ({
      ...state,
      addresses: state.addresses.filter(address => address !== action.payload)
    }))
    .addCase(addDerivedAddress, (state, action) => ({
      ...state,
      derivedAddresses: [...state.derivedAddresses, action.payload]
    }))
);
