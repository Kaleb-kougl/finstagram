import {
    POST_COMMENT_ATTEMPT,
    POST_COMMENT_SUCCESSFUL,
    POST_COMMENT_FAILED
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    newComment: null,
    error: null,
    isSuccess: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_COMMENT_ATTEMPT:
            console.log(action.payload);
            return {
                ...state,
                newComment: action.payload.comment,
                isLoading: true,
            }
        case POST_COMMENT_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                newComment: null,
                isSuccess: true,
            }
        case POST_COMMENT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                isSuccess: false,
            }
        default:
            return state;
    }
}