import { Wallet } from '@findeth/wallets';
import { createAction } from '@reduxjs/toolkit';

export const initialise = createAction<Wallet>('wallet/initialise');

export const setInitialised = createAction<boolean>('wallet/setInitialised');
