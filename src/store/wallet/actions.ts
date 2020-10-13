import { Wallet, WalletType } from '@findeth/wallets';
import { createAction } from '@reduxjs/toolkit';

export const setWalletType = createAction<WalletType>('wallet/setWalletType');

export const initialise = createAction<Wallet>('wallet/initialise');

export const setInitialised = createAction<boolean>('wallet/setInitialised');
