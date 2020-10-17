import { createReducer } from '@reduxjs/toolkit';
import { addAddress, INITIAL_STATE, setAddress, startSearching, stopSearching } from './types';

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
    .addCase(setAddress, (state, action) => ({
      ...state,
      address: action.payload
    }))
    .addCase(addAddress, (state, action) => ({
      ...state,
      addresses: [...state.addresses, action.payload]
    }))
);
