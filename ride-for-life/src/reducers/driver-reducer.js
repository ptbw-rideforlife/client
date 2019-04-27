import {
    DRIVER_ERROR, 
    ADD_DRIVER, 
    ADDING_DRIVER, 
    UPDATE_DRIVER, 
    UPDATING_DRIVER, 
    DELETE_DRIVER, 
    DELETING_DRIVER, 
    FETCH_DRIVER, 
    FETCHING_DRIVER, 
    UPDATE_BIO, 
    UPDATING_BIO, 
    ADD_BIO, 
    ADDING_BIO
} from '../actions/driver-actions';

const initialState = {
    driver: {}, //is this right?
    fetchingDriver: false, 
    addingDriver: false, 
    updatingDriver: false, 
    deletingDriver: false, 
    addingBio: false, 
    updatingBio: false, 
    error: null
}

export const driverReducer = (state = initialState, action) => {
    switch(action.type) {
        case DRIVER_ERROR: 
            return {
                ...state, 
                fetchingDriver: false, 
                addingDriver: false, 
                updatingDriver: false, 
                deletingDriver: false, 
                addingBio: false, 
                updatingBio: false, 
                error: action.payload
            }
        case FETCH_DRIVER: 
            return {
                ...state, 
                driver: action.payload, 
                fetchingDriver: false
            }
        case FETCHING_DRIVER: 
            return {
                ...state, 
                fetchingDriver: true
            }
        case ADD_DRIVER: 
            return {
                ...state, 
                driver: action.payload, 
                addingDriver: false
            }
        case ADDING_DRIVER:
            return {
                ...state, 
                addingDriver: true
            }
        case UPDATE_DRIVER: 
            return {
                ...state, 
                driver: action.payload, 
                updatingDriver: false
            }
        case UPDATING_DRIVER: 
            return {
                ...state, 
                updatingDriver: true
            }
        case DELETE_DRIVER: 
            return {
                ...state, 
                driver: action.payload, 
                deletingDriver: false
            }
        case DELETING_DRIVER: 
            return {
                ...state, 
                deletingDriver: true
            }
        case ADD_BIO: 
            return {
                ...state, 
                bio: action.payload, 
                addingBio: false
            }
        case ADDING_BIO: 
            return {
                ...state, 
                addingBio: true
            }
        case UPDATE_BIO:
            return {
                ...state, 
                bio: action.payload, 
                updatingBio: false
            }
        case UPDATING_BIO: 
            return {
                ...state, 
                updatingBio: true
            }
        default:
            return state
    }
}