import * as TYPES from '../constants/actionTypes';

export const attemptAWSLogin = (email, password) => ({
    type: TYPES.AWS_LOGIN_ATTEMPT,
    payload: { email, password },
});

export const successfulAWSLogin = () => ({
    type: TYPES.AWS_LOGIN_SUCCESSFUL,
    payload: {},
});

export const failedAWSLogin = (error) => ({
    type: TYPES.AWS_LOGIN_FAILED,
    payload: { error: error.message },
});