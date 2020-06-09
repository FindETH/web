import { configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { IS_DEVELOPMENT } from '../constants';
import { DerivationState } from './derivation';
import { NetworkState } from './network';
import reducer from './reducer';

export interface ApplicationState {
  derivation: DerivationState;
  network: NetworkState;
}

export type ApplicationDispatch = ReturnType<typeof createStore>['dispatch'];

const middleware = [...getDefaultMiddleware(), ...(IS_DEVELOPMENT ? [logger] : [])];

export const createStore = (preloadedState?: ApplicationState): EnhancedStore<ApplicationState> => {
  return configureStore({
    reducer,
    middleware,
    preloadedState
  });
};

// Default export for `gatsby-plugin-react-redux`
export default createStore;
