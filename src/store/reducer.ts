import { combineReducers } from 'redux';
import { derivationReducer } from './derivation';

const reducer = combineReducers({
  derivation: derivationReducer
});

export default reducer;
