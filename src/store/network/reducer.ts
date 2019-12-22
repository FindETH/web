import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_STATE, NetworkState, setNetwork, setOnline } from './network';

export const networkReducer = createReducer<NetworkState>(INITIAL_STATE, builder =>
  builder
    .addCase(setNetwork, (state, action) => {
      state.network = action.payload;
    })
    .addCase(setOnline, (state, action) => {
      state.online = action.payload;
    })
);
