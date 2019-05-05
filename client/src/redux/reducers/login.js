import {
    AWS_LOGIN_ATTEMPT,
    AWS_LOGIN_SUCCESSFUL,
    AWS_LOGIN_FAILED,
    AWS_LOGOUT_ATTEMPT,
    AWS_LOGOUT_SUCCESSFUL,
    AWS_LOGOUT_FAILED
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
        case AWS_LOGIN_ATTEMPT:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                isLoading: true,
                error: null,
            }
        case AWS_LOGIN_SUCCESSFUL:
            return {
                ...state,
                isAuthenticated: true,
                password: null,
                isLoading: false,
            }
        case AWS_LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        case AWS_LOGOUT_ATTEMPT:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
            }
        case AWS_LOGOUT_SUCCESSFUL:
            return {
                ...state,
                error: action.payload.error,
            }
        case AWS_LOGOUT_FAILED:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
            }
        default:
            return state;
    }
}
