import { combineReducers } from 'redux';
import { flowReducer } from '../features/flow';
import { networkReducer } from '../features/network';
import { searchReducer } from '../features/search';
import { ApplicationState } from './store';

const reducer = combineReducers<ApplicationState>({
  flow: flowReducer,
  network: networkReducer,
  search: searchReducer
});

export default reducer;
