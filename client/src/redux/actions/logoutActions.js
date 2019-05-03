import * as TYPES from '../constants/actionTypes';

export const attemptAWSLogout = () => ({
    type: TYPES.ATTEMPT_AWS_LOGOUT,
    payload: { isAuthenticated: false, },
});

export const successfulAWSLogout = () => ({
    type: TYPES.SUCCESSFUL_AWS_LOGIN,
    payload: {},
});

export const failedAWSLogout = (error) => ({
    type: TYPES.FAILED_AWS_LOGIN,
    payload: { error: error.message },
});