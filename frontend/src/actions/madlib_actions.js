// import { getMadlibs, getMadlib, getUserMadlibs, writeMadlib, editMadlib, dumpMadlib } from '../util/madlib_api_util';
import * as MadlibAPIUtil from '../util/madlib_api_util';

export const RECEIVE_MADLIB = "RECEIVE_MADLIB";
export const RECEIVE_ALL_MADLIBS = "RECEIVE_ALL_MADLIBS";
export const RECEIVE_USER_MADLIBS = "RECEIVE_USER_MADLIBS";
export const CREATE_MADLIB = "CREATE_MADLIB";
export const REMOVE_MADLIB = "REMOVE_MADLIB";
export const RECEIVE_MADLIB_ERRORS = "RECEIVE_MADLIB_ERRORS";
export const REMOVE_MADLIB_ERRORS = "REMOVE_MADLIB_ERRORS";

const receiveAllMadlibs = response => ({
  type: RECEIVE_ALL_MADLIBS,
  madlibs: response.data
});

const receiveUserMadlibs = response => ({
  type: RECEIVE_USER_MADLIBS,
  madlibs: response.data
});

export const createMadlib = response => ({
  type: CREATE_MADLIB,
  madlib: response.data
});

export const receiveMadlib = response => ({
  type: RECEIVE_MADLIB,
  madlib: response.data
});

export const removeMadlib = madlibId => ({
  type: REMOVE_MADLIB,
  madlibId
})

export const receiveMadlibErrors = errors => ({
  type: RECEIVE_MADLIB_ERRORS,
  errors
})

export const removeMadlibErrors = () => ({
  type: REMOVE_MADLIB_ERRORS,
})


export const fetchMadlibs = () => dispatch => (
  MadlibAPIUtil.getMadlibs()
    .then( response => dispatch(receiveAllMadlibs(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const fetchMadlib = madlibId => dispatch => (
  MadlibAPIUtil.getMadlib(madlibId)
    .then(response => dispatch(receiveMadlib(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const fetchUserMadlibs = id => dispatch => (
  MadlibAPIUtil.getUserMadlibs(id)
    .then( response => dispatch(receiveUserMadlibs(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const composeMadlib = data => dispatch => (
  MadlibAPIUtil.writeMadlib(data)
    .then( response => dispatch(createMadlib(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const updateMadlib = madlib => dispatch => (
  MadlibAPIUtil.editMadlib(madlib)
    .then( response => dispatch(receiveMadlib(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const deleteMadlib = madlibId => dispatch => (
  MadlibAPIUtil.dumpMadlib(madlibId)
    .then(() => dispatch(removeMadlib(madlibId)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);
