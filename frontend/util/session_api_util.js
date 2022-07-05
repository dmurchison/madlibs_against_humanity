import axios from 'axios';

// the token parameter will either be a Json Web Token or a false (falsey value);
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};