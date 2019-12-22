import { combineReducers } from 'redux';
import { derivationReducer } from './derivation';
import { networkReducer } from './network';
import { ApplicationState } from './store';

const reducer = combineReducers<ApplicationState>({
  derivation: derivationReducer,
  network: networkReducer
});

export default reducer;
