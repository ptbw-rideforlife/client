import axios from 'axios';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const userLogin = creds => dispatch => {
  creds.phoneNumber = Number(creds.phoneNumber);
  dispatch({ type: USER_LOGIN_START });
  return axios
    .post('https://ride4life.herokuapp.com/login/users', creds)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      dispatch({ type: USER_LOGIN_SUCCESS })
    })
    .catch(err => {
      if(err) {
        localStorage.removeItem('token')
      }
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: 'FAILED'
      })
    })
}