import * as TYPES from '../constants/actionTypes';

export const change_to_thumbnail = () => ({
    type: TYPES.THUMBNAIL_VIEW,
    payload: {},
});

export const change_to_portrait = () => ({
    type: TYPES.PORTRAIT_VIEW,
    payload: {},
});

export const attemptAWSLogin = (user) => ({
    type: TYPES.ATTEMPT_AWS_LOGIN,
    payload: { user: user },
});

export const logout_user = () => ({
    type: TYPES.LOGOUT,
    payload: { user: null },
});
