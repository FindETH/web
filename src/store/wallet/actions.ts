import { WalletType } from '@findeth/wallets';
import { createAction } from '@reduxjs/toolkit';

export const setWalletType = createAction<WalletType>('wallet/setWalletType');

export const setImplementation = createAction<string>('wallet/setImplementation');
