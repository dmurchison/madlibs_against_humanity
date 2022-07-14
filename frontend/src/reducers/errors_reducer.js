import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import madlibsErrorsReducer from './errors/madlibs_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  madlibs: madlibsErrorsReducer
});