import { createReducer } from '@reduxjs/toolkit';
import { DerivationState, INITIAL_STATE, setFlow, setImplementation, setSearching } from './derivation';

export const derivationReducer = createReducer<DerivationState>(INITIAL_STATE, builder =>
  builder
    .addCase(setFlow, (state, action) => {
      state.isFlow = action.payload;
    })
    .addCase(setSearching, (state, action) => {
      state.isSearching = action.payload;
    })
    .addCase(setImplementation, (state, action) => {
      state.implementation = action.payload;
    })
);
