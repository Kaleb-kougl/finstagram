import {
    ATTEMPT_AWS_POST_PHOTO,
    SUCCESSFUL_AWS_POST_PHOTO,
    FAILED_AWS_POST_PHOTO
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    photo: null,
    description: '',
    error: null,
    isSuccess: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ATTEMPT_AWS_POST_PHOTO:
            return {
                ...state,
                photo: action.payload.photo,
                description: action.payload.description,
                isLoading: true,
            };
        case SUCCESSFUL_AWS_POST_PHOTO:
            return {
                ...state,
                isLoading: false,
                isSuccess: action.payload.isSuccess,
            };
        case FAILED_AWS_POST_PHOTO:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}