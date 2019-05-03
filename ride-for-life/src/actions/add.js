import axios from 'axios';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';

export const add = (profile, bool) => dispatch => {
  const url = bool ? 'https://ride4life.herokuapp.com/register/users' : 'https://ride4life.herokuapp.com/register/driver';
  dispatch({ type: ADD_START });
  return axios
    .post(url, profile)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}