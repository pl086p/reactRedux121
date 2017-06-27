import { combineReducers } from 'redux';
import { gridReducer }      from './gridReducer';
import { logListReducer }   from './logListReducer';

export  const rootReducer =  combineReducers({
  gridReducer,
  logListReducer
})
