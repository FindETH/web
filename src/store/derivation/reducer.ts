import { createReducer } from '@reduxjs/toolkit';
import { addAddress, setAddress, setDerivationPaths, setFlow, setSearching, startSearching } from './actions';
import { DerivationState, INITIAL_STATE } from './types';

export const derivationReducer = createReducer<DerivationState>(INITIAL_STATE, builder =>
  builder
    .addCase(setFlow, (state, action) => {
      return {
        ...state,
        isFlow: action.payload
      };
    })
    .addCase(setSearching, (state, action) => {
      return {
        ...state,
        isSearching: action.payload
      };
    })
    .addCase(startSearching, state => {
      return {
        ...state,
        isSearching: true
      };
    })
    .addCase(setDerivationPaths, (state, action) => {
      return {
        ...state,
        derivationPaths: action.payload
      };
    })
    .addCase(setAddress, (state, action) => {
      return {
        ...state,
        address: action.payload
      };
    })
    .addCase(addAddress, (state, action) => {
      return {
        ...state,
        addresses: [...state.addresses, action.payload]
      };
    })
);
