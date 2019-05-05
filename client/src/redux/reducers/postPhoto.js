import {
    AWS_POST_PHOTO_ATTEMPT,
    AWS_POST_PHOTO_SUCCESSFUL,
    AWS_POST_PHOTO_FAILED
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
        case AWS_POST_PHOTO_ATTEMPT:
            return {
                ...state,
                photo: action.payload.photo,
                description: action.payload.description,
                isLoading: true,
            };
        case AWS_POST_PHOTO_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                isSuccess: action.payload.isSuccess,
            };
        case AWS_POST_PHOTO_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}