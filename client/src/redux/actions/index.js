import * as TYPES from '../constants/actionTypes';

export const change_to_thumbnail = () => ({
    type: TYPES.THUMBNAIL_VIEW,
    payload: {},
});

export const change_to_portrait = () => ({
    type: TYPES.PORTRAIT_VIEW,
    payload: {},
});

export const attemptAWSLogin = (email, password) => ({
    type: TYPES.ATTEMPT_AWS_LOGIN,
    payload: { email, password },
});

export const successfulAWSLogin = () => ({
    type: TYPES.SUCCESSFUL_AWS_LOGIN,
    payload: {},
});

export const logout_user = () => ({
    type: TYPES.LOGOUT,
    payload: { user: null },
});

export const failedAWSLogin = (error) => ({
    type: TYPES.FAILED_AWS_LOGIN,
    payload: { error: error.message },
});
