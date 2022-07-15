import { RECEIVE_MADLIB, RECEIVE_ALL_MADLIBS, RECEIVE_USER_MADLIBS, REMOVE_MADLIB, CREATE_MADLIB } from '../actions/madlib_actions';
  
  const MadlibsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
      case RECEIVE_ALL_MADLIBS:
        newState = {};
        action.madlibs.forEach( madlib => {
          newState[madlib._id] = {
            blanks: madlib.blanks,
            body: madlib.body,
            date: madlib.date,
            rating: madlib.rating,
            title: madlib.title,
            user: madlib.user._id,
            __v: madlib.__v,
            _id: madlib._id
          }
        });
        
        return newState;
      case RECEIVE_USER_MADLIBS:
        newState = {};
        action.madlibs.forEach( madlib => {
          newState[madlib._id] = madlib;
        });

        return newState;
      case RECEIVE_MADLIB:
        newState = Object.assign({}, state);
        newState[action.madlib._id] = action.madlib
        return newState;
      case CREATE_MADLIB:
        newState = Object.assign({}, state);
        newState[action.madlib._id] = action.madlib
        return newState;
      case REMOVE_MADLIB:
        delete newState[action.madlibId]
        return newState;
      default:
        return state;
    }
  };
  
  export default MadlibsReducer;