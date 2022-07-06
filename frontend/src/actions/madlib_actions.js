import { getMadlibs, getUserMadlibs, writeMadlib } from '../util/madlib_api_util';

export const RECEIVE_MADLIBS = "RECEIVE_MADLIBS";
export const RECEIVE_NEW_MADLIB = "RECEIVE_NEW_MADLIB";

export const receiveMadlibs = madlibs => ({
  type: RECEIVE_MADLIBS,
  madlibs
});

export const receiveNewMadlib = madlib => ({
  type: RECEIVE_NEW_MADLIB,
  madlib
})

export const fetchMadlibs = () => dispatch => (
  getMadlibs()
    .then(madlibs => dispatch(receiveMadlibs(madlibs)))
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