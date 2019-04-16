import * as TYPES from '../constants/actionTypes';

export const change_to_thumbnail = () => ({
    type: TYPES.THUMBNAIL_VIEW,
    payload: {},
});

export const change_to_portrait = () => ({
    type: TYPES.PORTRAIT_VIEW,
    payload: {},
});

export const attemptFbLogin = (user) => ({
    type: TYPES.ATTEMPT_FB_LOGIN,
    payload: { user: user },
});

export const logout_user = () => ({
    type: TYPES.LOGOUT,
    payload: { user: null },
});
