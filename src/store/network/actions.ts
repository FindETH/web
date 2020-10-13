import { Network } from '@findeth/networks';
import { createAction } from '@reduxjs/toolkit';

export const setNetwork = createAction<Network>('network/setNetwork');
export const checkNetwork = createAction('network/checkNetwork');

export const setOnline = createAction<boolean>('network/setOnline');
