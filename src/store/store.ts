import { configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { IS_DEVELOPMENT } from '../constants';
import { FlowState } from '../features/flow';
import { NetworkState, rootSaga as networkSaga } from '../features/network';
import { rootSaga as searchSaga, SearchState } from '../features/search';
import reducer from './reducer';

export interface ApplicationState {
  flow: FlowState;
  network: NetworkState;
  search: SearchState;
}

export type ApplicationDispatch = ReturnType<typeof createStore>['dispatch'];

export const createStore = (preloadedState?: ApplicationState): EnhancedStore<ApplicationState> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware, ...(IS_DEVELOPMENT ? [logger] : [])],
    preloadedState
  });

  sagaMiddleware.run(searchSaga);
  sagaMiddleware.run(networkSaga);

  return store;
};

// Default export for `gatsby-plugin-react-redux`
export default createStore;
