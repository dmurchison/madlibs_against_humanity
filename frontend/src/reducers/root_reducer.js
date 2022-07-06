import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';

import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default RootReducer;