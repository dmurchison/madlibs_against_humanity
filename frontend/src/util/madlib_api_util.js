import axios from 'axios';

export const getMadlibs = () => {
  return axios.get('/api/madlibs')
};

export const getUserMadlibs = id => {
  return axios.get(`/api/madlibs/user/${id}`)
};

export const writeMadlib = data => {
  return axios.post('/api/madlibs/', data)
}