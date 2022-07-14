import { getMadlibs, getMadlib, getUserMadlibs, writeMadlib, editMadlib, dumpMadlib } from '../util/madlib_api_util';

export const RECEIVE_MADLIB = "RECEIVE_MADLIB";
export const RECEIVE_MADLIBS = "RECEIVE_MADLIBS";
export const REMOVE_MADLIB = "REMOVE_MADLIB";
export const RECEIVE_MADLIB_ERRORS = "RECEIVE_MADLIB_ERRORS";

const receiveMadlibs = response => ({
  type: RECEIVE_MADLIBS,
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

const receiveMadlibErrors = errors => ({
  type: RECEIVE_MADLIB_ERRORS,
  errors
})


export const fetchMadlibs = () => dispatch => (
  getMadlibs()
    .then( response => dispatch(receiveMadlibs(response)))
    .catch(err => console.log(err))
);

export const fetchMadlib = madlibId => dispatch => (
  getMadlib(madlibId)
    .then(response => dispatch(receiveMadlib(response)))
    .catch(err => console.log(err))
);

export const fetchUserMadlibs = id => dispatch => (
  getUserMadlibs(id)
    .then( response => dispatch(receiveMadlibs(response)))
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