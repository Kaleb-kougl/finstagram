import * as TYPES from '../constants/actionTypes';

export const attemptPostComment = comment => ({
    type: TYPES.POST_COMMENT_ATTEMPT,
    payload: { comment },
});

export const successfulPostComment = () => ({
    type: TYPES.POST_COMMENT_SUCCESSFUL,
    payload: {},
});

export const failedPostComment = error => ({
    type: TYPES.POST_COMMENT_FAILED,
    payload: { error }
});