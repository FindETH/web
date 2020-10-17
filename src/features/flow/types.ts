import { WalletType } from '@findeth/wallets';
import { createAction } from '@reduxjs/toolkit';

export interface FlowState {
  isFlow: boolean;
  isWalletInitialised: boolean;
  walletType?: WalletType;
}

export const INITIAL_STATE: FlowState = {
  isFlow: false,
  isWalletInitialised: false
};

export const setFlow = createAction<boolean>('flow/setFlow');

export const setWalletType = createAction<WalletType>('flow/setWalletType');
export const setWalletInitialised = createAction<boolean>('flow/setWalletInitialised');
