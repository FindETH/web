import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_STATE, setConnected, setNetwork, setOnline } from './types';

export const networkReducer = createReducer(INITIAL_STATE, builder =>
  builder
    .addCase(setNetwork, (state, action) => {
      return {
        ...state,
        network: action.payload
      };
    })
    .addCase(setOnline, (state, action) => {
      return {
        ...state,
        isOnline: action.payload
      };
    })
    .addCase(setConnected, (state, action) => {
      return {
        ...state,
        isConnected: action.payload
      };
    })
);
