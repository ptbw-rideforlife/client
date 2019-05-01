import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED
} from '../actions';

const initialState = {
  loggingIn: false,
  error: null
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        loggingIn: true
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false
      }
    case USER_LOGIN_FAILED:
      console.log(action.payload)
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }
    default: return state;
  }
}