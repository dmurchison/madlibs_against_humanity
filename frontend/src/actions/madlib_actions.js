import { getMadlibs, getMadlib, getUserMadlibs, writeMadlib, editMadlib, dumpMadlib } from '../util/madlib_api_util';

export const RECEIVE_MADLIB = "RECEIVE_MADLIB";
export const RECEIVE_ALL_MADLIBS = "RECEIVE_ALL_MADLIBS";
export const RECEIVE_USER_MADLIBS = "RECEIVE_USER_MADLIBS";
export const REMOVE_MADLIB = "REMOVE_MADLIB";

const receiveAllMadlibs = response => ({
  type: RECEIVE_ALL_MADLIBS,
  madlibs: response.data
});

const receiveUserMadlibs = response => ({
  type: RECEIVE_USER_MADLIBS,
  madlibs: response.data
});

const receiveMadlib = response => ({
  type: RECEIVE_MADLIB,
  madlib: response.data
});

const removeMadlib = madlibId => ({
  type: REMOVE_MADLIB,
  madlibId
})



export const fetchMadlibs = () => dispatch => (
  getMadlibs()
    .then( response => dispatch(receiveAllMadlibs(response)))
    .catch(err => console.log(err))
);

export const fetchMadlib = madlibId => dispatch => (
  getMadlib(madlibId)
    .then(response => dispatch(receiveMadlib(response)))
    .catch(err => console.log(err))
);

export const fetchUserMadlibs = id => dispatch => (
  getUserMadlibs(id)
    .then( response => dispatch(receiveUserMadlibs(response)))
    .catch(err => console.log(err))
);

export const composeMadlib = data => dispatch => (
  writeMadlib(data)
    .then( response => dispatch(receiveMadlib(response)))
    .catch(err => console.log(err))
);

export const updateMadlib = madlib => dispatch => (
  editMadlib(madlib)
    .then( response => dispatch(receiveMadlib(response)))
    .catch(err => console.log(err))
);

export const deleteMadlib = madlibId => dispatch => (
  dumpMadlib(madlibId)
    .then(() => dispatch(removeMadlib(madlibId)))
    .catch(err => console.log(err))
);