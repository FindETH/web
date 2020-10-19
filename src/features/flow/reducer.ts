import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_STATE, setFlow, setWalletInitialised, setWalletType } from './types';

export const flowReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(setFlow, (state, action) => ({
      ...state,
      isFlow: action.payload
    }))
    .addCase(setWalletInitialised, (state, action) => ({
      ...state,
      isWalletInitialised: action.payload
    }))
    .addCase(setWalletType, (state, action) => ({
      ...state,
      walletType: action.payload
    }))
);
