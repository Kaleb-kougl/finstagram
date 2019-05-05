import * as TYPES from '../constants/actionTypes';

export const attemptAWSLogout = () => ({
    type: TYPES.AWS_LOGOUT_ATTEMPT,
    payload: { isAuthenticated: false, },
});

export const successfulAWSLogout = () => ({
    type: TYPES.AWS_LOGOUT_SUCCESSFUL,
    payload: {},
});

export const failedAWSLogout = (error) => ({
    type: TYPES.AWS_LOGOUT_FAILED,
    payload: { error: error.message },
});