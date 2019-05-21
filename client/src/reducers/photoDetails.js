import {
    AWS_LOAD_COMMENTS_ATTEMPT,
    AWS_LOAD_COMMENTS_SUCCESSFUL,
    AWS_LOAD_COMMENTS_FAILED
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    photoId: null,
    error: null,
    isSuccess: false,
    comments: null,
}

// should put likes in here

export default function (state = initialState, action) {
    switch (action.type) {
        case AWS_LOAD_COMMENTS_ATTEMPT:
            return {
                ...state,
                photoId: action.payload.photoId,
                isLoading: true,
            };
        case AWS_LOAD_COMMENTS_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                isSuccess: action.payload.isSuccess,
                comments: action.payload.comments,
            };
        case AWS_LOAD_COMMENTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}