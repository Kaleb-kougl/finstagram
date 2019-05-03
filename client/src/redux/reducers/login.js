import {
    ATTEMPT_AWS_LOGIN,
    SUCCESSFUL_AWS_LOGIN,
    FAILED_AWS_LOGIN,
    ATTEMPT_AWS_LOGOUT,
    SUCCESSFUL_AWS_LOGOUT,
    FAILED_AWS_LOGOUT,
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
                password: null,
                isLoading: false,
            }
        case FAILED_AWS_LOGIN:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        case ATTEMPT_AWS_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
            }
        case FAILED_AWS_LOGOUT:
            return {
                ...state,
                error: action.payload.error,
            }
        case SUCCESSFUL_AWS_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
            }
        default:
            return state;
    }
}
