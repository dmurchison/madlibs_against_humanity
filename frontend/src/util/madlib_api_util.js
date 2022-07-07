import axios from 'axios';

export const getMadlibs = () => {
  return axios.get('/api/madlibs')
};

export const getMadlib = id => {
  return axios.get('/api/madlibs/'+id)
};

export const getUserMadlibs = id => {
  return axios.get(`/api/madlibs/user/${id}`)
};

export const writeMadlib = data => {
  return axios.post('/api/madlibs/', data)
}

export const editMadlib = data => {
  return axios.patch('/api/madlibs/'+data._id, data)
}

export const dumpMadlib = id => {
  return axios.delete('/api/madlibs/'+id)
};
