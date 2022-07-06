import { getMadlibs, getUserMadlibs, writeMadlib } from '../util/madlib_api_util';

export const RECEIVE_MADLIBS = "RECEIVE_MADLIBS";
export const RECEIVE_NEW_MADLIB = "RECEIVE_NEW_MADLIB";

const receiveMadlibs = response => ({
  type: RECEIVE_MADLIBS,
  madlibs: response.data
});

const receiveNewMadlib = madlib => ({
  type: RECEIVE_NEW_MADLIB,
  madlib
})

//im calling the param for the .then() response because its the
// response of the promise
export const fetchMadlibs = () => dispatch => (
  getMadlibs()
    .then( response => dispatch(receiveMadlibs(response)))
    .catch(err => console.log(err))
);

export const fetchUserMadlibs = id => dispatch => (
  getUserMadlibs(id)
    .then(madlibs => dispatch(receiveMadlibs(madlibs)))
    .catch(err => console.log(err))
);

export const composeMadlib = data => dispatch => (
  writeMadlib(data)
    .then(madlib => dispatch(receiveNewMadlib(madlib)))
    .catch(err => console.log(err))
);