import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import madlibsErrorsReducer from './errors/madlibs_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  madlibs: madlibsErrorsReducer
});

export default errorsReducer;