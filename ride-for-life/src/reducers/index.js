import { combineReducers } from 'redux';
import { driverReducer } from './driver-reducer';
import { generalReducer } from './general-reducer';
import { mcReducer } from './mc-reducer';
import { reviewReducer } from './review-reducer';
import { rideReducer } from './ride-reducer';

export default combineReducers({
    driverReducer, 
    generalReducer, 
    mcReducer, 
    reviewReducer, 
    rideReducer
})