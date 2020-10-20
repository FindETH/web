import { createReducer } from '@reduxjs/toolkit';
import {
  addAddress,
  addDerivedAddress,
  completeSearching,
  INITIAL_STATE,
  removeAddress,
  setCurrentDerivationPath,
  setCurrentIndex,
  setDepth,
  setDerivationPaths,
  setSerialisedWallet,
  setType,
  startSearching,
  stopSearching
} from './types';

export const searchReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(startSearching, (state) => ({
      ...state,
      isSearching: true,
      isComplete: false
    }))
    .addCase(stopSearching, (state) => ({
      ...state,
      isSearching: false
    }))
    .addCase(completeSearching, (state) => ({
      ...state,
      isSearching: false,
      isComplete: true
    }))
    .addCase(setSerialisedWallet, (state, action) => ({
      ...state,
      wallet: action.payload
    }))
    .addCase(setType, (state, action) => ({
      ...state,
      type: action.payload
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
      addresses: state.addresses.filter((address) => address !== action.payload)
    }))
    .addCase(setCurrentDerivationPath, (state, action) => ({
      ...state,
      currentDerivationPath: action.payload
    }))
    .addCase(setCurrentIndex, (state, action) => ({
      ...state,
      currentIndex: action.payload
    }))
    .addCase(addDerivedAddress, (state, action) => ({
      ...state,
      derivedAddresses: [...state.derivedAddresses, action.payload]
    }))
);
