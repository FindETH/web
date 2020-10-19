import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_STATE, setConnected, setNetwork, setNetworkError, setOnline } from './types';

export const networkReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(setNetwork, (state, action) => ({
      ...state,
      network: action.payload,
      networkError: undefined,
      isConnected: false
    }))
    .addCase(setNetworkError, (state, action) => ({
      ...state,
      networkError: action.payload
    }))
    .addCase(setOnline, (state, action) => ({
      ...state,
      isOnline: action.payload
    }))
    .addCase(setConnected, (state, action) => ({
      ...state,
      isConnected: action.payload
    }))
);
