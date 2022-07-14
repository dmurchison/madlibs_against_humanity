import {
  RECEIVE_MADLIB_ERRORS,
  REMOVE_MADLIB_ERRORS,
} from '../../actions/madlib_actions';

const _nullErrors = [];

const madlibsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MADLIB_ERRORS:
      return action.errors;
    case REMOVE_MADLIB_ERRORS:
      return [];
    default:
      return state;
  }
};

export default madlibsErrorsReducer;