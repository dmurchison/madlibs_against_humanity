import * as SessionAPIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

// We'll dispatch this when our user signs in
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// To remove session errors when users bounce from singup to login after errors
export const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

// When our user is logged out, we will dispatch this action to set isAuthenticated to false
export const logoutUser = (currentUser) => ({
  type: RECEIVE_USER_LOGOUT,
  currentUser
});

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(
        () => dispatch(login(user))
    )
    .catch(
        err => dispatch(receiveErrors(err.response.data))
    )
);

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        SessionAPIUtil.setAuthToken(token);
        
        //Below is the user and all of the user info
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

// We wrote this one earlier
export const logout = (currentUser) => dispatch => {
  localStorage.removeItem('jwtToken')
  SessionAPIUtil.setAuthToken(false)
  dispatch(logoutUser(currentUser))
};