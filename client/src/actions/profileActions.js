import * as TYPES from '../constants/actionTypes';

export const change_to_thumbnail = () => ({
    type: TYPES.VIEW_THUMBNAIL,
    payload: {},
});

export const change_to_portrait = () => ({
    type: TYPES.VIEW_PORTRAIT,
    payload: {},
});

export const attemptLoadProfile = () => ({
    type: TYPES.LOAD_PROFILE_ATTEMPT,
    payload: {},
});

export const successfulLoadProfile = ({ photos }) => ({
    type: TYPES.LOAD_PROFILE_SUCCESS,
    payload: { photos }
});

export const failedLoadProfile = ({ error }) => ({
    type: TYPES.LOAD_PROFILE_FAILED,
    payload: { error }
});