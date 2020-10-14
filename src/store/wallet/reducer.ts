import { createReducer } from '@reduxjs/toolkit';
import { SerialisedWallet } from '../../types/wallet';
import { setImplementation, setWalletType } from './actions';
import { INITIAL_STATE } from './types';

const reducer = createReducer(INITIAL_STATE, builder =>
  builder
    .addCase(setWalletType, (state, action) => {
      return {
        ...state,
        type: action.payload
      };
    })
    .addCase(setImplementation, (state, action) => {
      const serialised = action.payload as SerialisedWallet;

      return {
        ...state,
        wallet: serialised
      };
    })
);

export default reducer;
