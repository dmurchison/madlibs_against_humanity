import { getMadlibs, getMadlib, getUserMadlibs, writeMadlib, updateMadlib, dumpMadlib } from '../util/madlib_api_util';

export const RECEIVE_MADLIB = "RECEIVE_MADLIB";
export const RECEIVE_ALL_MADLIBS = "RECEIVE_ALL_MADLIBS";
export const RECEIVE_NEW_MADLIB = "RECEIVE_NEW_MADLIB";
export const REMOVE_MADLIB = "REMOVE_MADLIB";

export const receiveMadlibs = madlibs => ({
  type: RECEIVE_ALL_MADLIBS,
  madlibs
});

export const receiveMadlib = madlib => ({
  type: RECEIVE_MADLIB,
  madlib
});

export const receiveNewMadlib = madlib => ({
  type: RECEIVE_NEW_MADLIB,
  madlib
})

export const removeMadlib = madlibId => ({
  type: RECEIVE_NEW_MADLIB,
  madlibId
})



export const fetchMadlibs = () => dispatch => (
  getMadlibs()
    .then(madlibs => dispatch(receiveMadlibs(madlibs)))
    .catch(err => console.log(err))
);

export const fetchMadlib = madlibId => dispatch => (
  getMadlib(madlibId)
    .then(madlib => dispatch(receiveMadlib(madlib)))
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

export const updateMadlib = madlib => dispatch => (
  updateMadlib(madlib)
    .then(madlib => dispatch(receiveMadlib(madlib)))
    .catch(err => console.log(err))
);

export const deleteMadlib = madlibId => dispatch => (
  dumpMadlib(madlibId)
    .then(() => dispatch(removeMadlib(madlibId)))
    .catch(err => console.log(err))
);