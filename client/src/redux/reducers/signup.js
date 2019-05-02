import {
    ATTEMPT_AWS_SIGNUP,
    SUCCESSFUL_AWS_SIGNUP,
    FAILED_AWS_SIGNUP,
    ATTEMPT_AWS_CONFIRM_SIGNUP,
    SUCCESSFUL_AWS_CONFIRM_SIGNUP,
    FAILED_AWS_CONFIRM_SIGNUP,
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    email: null,
    password: null,
    confirmationCode: null,
    newUser: null,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ATTEMPT_AWS_SIGNUP:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                isLoading: true,
                error: null,
            }
        case SUCCESSFUL_AWS_SIGNUP:
            return {
                ...state,
                newUser: action.payload.newUser,
                isLoading: false,
            }
        case FAILED_AWS_SIGNUP:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        case ATTEMPT_AWS_CONFIRM_SIGNUP:
            return {
                ...state,
                confirmationCode: action.payload.confirmationCode,
            }
        case SUCCESSFUL_AWS_CONFIRM_SIGNUP:
            return {
                ...state,
                isLoading: false,
            }
        case FAILED_AWS_CONFIRM_SIGNUP:
            return {
                ...state,
                isLoading: false,
                error: action.payload.confirmationCode,
            }
        default:
            return state;
    }
};