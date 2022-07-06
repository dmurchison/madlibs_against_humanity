import { RECEIVE_MADLIBS, RECEIVE_NEW_MADLIB } from '../actions/madlib_actions';
  
  const MadlibsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_MADLIBS:
        return action.madlibs;
      case RECEIVE_NEW_MADLIB:
        newState[action.madlib.id] = action.madlib
        return newState;
      default:
        return state;
    }
  };
  
  export default MadlibsReducer;