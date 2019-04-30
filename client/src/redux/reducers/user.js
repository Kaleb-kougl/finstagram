import {
    ATTEMPT_AWS_LOGIN,
    LOGOUT,
    SUCCESSFUL_AWS_LOGIN,
    FAILED_AWS_LOGIN,
    FAILED_LOGOUT,
    SUCCESSFUL_LOGOUT,
} from '../constants/actionTypes';

const initialState = {
    // user: null, //This is going to be stored in the browser session via amplify
    // disabledPopup: false,
    isLoading: false,
    isAuthenticated: false,
    email: null,
    password: null,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ATTEMPT_AWS_LOGIN:
            console.log(action);
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                isLoading: true,
                error: null,
            }
        case SUCCESSFUL_AWS_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                email: null,
                password: null,
                isLoading: false,
            }
        case FAILED_AWS_LOGIN:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
            }
        case FAILED_LOGOUT:
            return {
                ...state,
                error: action.payload.error,
            }
        case SUCCESSFUL_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
            }
        default:
            return state;
    }
}
