import { createReducer } from '@reduxjs/toolkit';
import { setNetwork, setOnline } from './actions';
import { INITIAL_STATE, NetworkState } from './types';

export const networkReducer = createReducer<NetworkState>(INITIAL_STATE, builder =>
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
);
