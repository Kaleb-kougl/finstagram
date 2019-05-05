import {
    AWS_SIGNUP_ATTEMPT,
    AWS_SIGNUP_SUCCESSFUL,
    AWS_SIGNUP_FAILED,
    AWS_CONFIRM_SIGNUP_ATTEMPT,
    AWS_CONFIRM_SIGNUP_SUCCESSFUL,
    AWS_CONFIRM_SIGNUP_FAILED,
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
        case AWS_SIGNUP_ATTEMPT:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                isLoading: true,
                error: null,
            }
        case AWS_SIGNUP_SUCCESSFUL:
            return {
                ...state,
                newUser: action.payload.newUser,
                isLoading: false,
            }
        case AWS_SIGNUP_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        case AWS_CONFIRM_SIGNUP_ATTEMPT:
            return {
                ...state,
                confirmationCode: action.payload.confirmationCode,
            }
        case AWS_CONFIRM_SIGNUP_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
            }
        case AWS_CONFIRM_SIGNUP_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.confirmationCode,
            }
        default:
            return state;
    }
};