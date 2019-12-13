import { createReducer } from '@reduxjs/toolkit';
import { DerivationState, INITIAL_STATE, setFlow } from './derivation';

export const derivationReducer = createReducer<DerivationState>(INITIAL_STATE,
  builder => (
    builder
      .addCase(setFlow, (state, action) => {
        state.isFlow = action.payload;
      })
  ));
