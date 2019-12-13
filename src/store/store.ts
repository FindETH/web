import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { IS_DEVELOPMENT } from '../constants';
import { DerivationState } from './derivation';
import reducer from './reducer';

export interface ApplicationState {
  derivation: DerivationState;
}

const middleware = [
  ...getDefaultMiddleware(),
  ...(IS_DEVELOPMENT ? [logger] : [])
];

export const store = configureStore<ApplicationState>({
  reducer,
  middleware
});

export type ApplicationDispatch = typeof store.dispatch;

if (IS_DEVELOPMENT) {
  module.hot?.accept('./reducer', async () => {
    store.replaceReducer(reducer);
  });
}
