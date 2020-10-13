import { createReducer } from '@reduxjs/toolkit';
import { SerialisedWallet } from '../../types/wallet';
import { initialise, setInitialised, setWalletType } from './actions';
import { INITIAL_STATE } from './types';

const reducer = createReducer(INITIAL_STATE, builder =>
  builder
    .addCase(setWalletType, (state, action) => {
      return {
        ...state,
        type: action.payload
      };
    })
    .addCase(initialise, (state, action) => {
      const serialised = action.payload.serialize() as SerialisedWallet;

      return {
        ...state,
        wallet: serialised
      };
    })
    .addCase(setInitialised, (state, action) => {
      return {
        ...state,
        initialised: action.payload
      };
    })
);

export default reducer;
