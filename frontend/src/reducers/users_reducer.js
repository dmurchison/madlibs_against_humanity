import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT} from '../actions/session_actions';
import {  RECEIVE_USER_MADLIBS, RECEIVE_ALL_MADLIBS } from '../actions/madlib_actions';

const usersReducer = (state={}, action) => {
  Object.freeze(state);

  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state);
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    case RECEIVE_USER_LOGOUT:
      newState = Object.assign({}, state);
      delete newState[action.currentUser.id];
      return newState;
    case RECEIVE_ALL_MADLIBS:
      newState = Object.assign({}, state);
      action.madlibs.forEach( madlib => {
        newState[madlib.user._id] = madlib.user;
      })
      return newState;
    case RECEIVE_USER_MADLIBS:
      newState = Object.assign({}, state);
      const madlibs = Object.values(action.madlibs)
      if ( madlibs[0] ){
        newState[madlibs[0].user._id] = madlibs[0].user._id
      }

      return newState;
    default:
      return state;
  };

}

export default usersReducer;