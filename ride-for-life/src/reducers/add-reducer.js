import {
  ADD_START, 
  ADD_SUCCESS, 
  ADD_FAILED
} from '../actions';


const initialState = {
  adding: false,
  error: null
}

export const addReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_START:
    console.log('add_start')
      return {
        ...state,
      }
    case ADD_SUCCESS:
    console.log('add_success')
      return {
        ...state,
      }
    case ADD_FAILED:
    console.log('add_failed')
      return {
        ...state,
      }
    default: return state;
  }
}