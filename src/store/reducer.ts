import { combineReducers } from 'redux';
import { derivationReducer } from './derivation';
import { networkReducer } from './network';
import { ApplicationState } from './store';
import walletReducer from './wallet';

const reducer = combineReducers<ApplicationState>({
  derivation: derivationReducer,
  network: networkReducer,
  wallet: walletReducer
});

export default reducer;
