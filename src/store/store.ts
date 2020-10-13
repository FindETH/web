import { configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { DerivationState } from './derivation';
import { NetworkState, rootSaga as networkSaga } from './network';
import reducer from './reducer';
import { WalletState } from './wallet';

export interface ApplicationState {
  derivation: DerivationState;
  network: NetworkState;
  wallet: WalletState;
}

export type ApplicationDispatch = ReturnType<typeof createStore>['dispatch'];

export const createStore = (preloadedState?: ApplicationState): EnhancedStore<ApplicationState> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware, logger],
    preloadedState
  });

  sagaMiddleware.run(networkSaga);

  return store;
};

// Default export for `gatsby-plugin-react-redux`
export default createStore;
