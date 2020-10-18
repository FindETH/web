import { createReducer } from '@reduxjs/toolkit';
import { addAddress, addDerivedAddress, INITIAL_STATE, removeAddress, startSearching, stopSearching } from './types';

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
