import * as TYPES from '../constants/actionTypes';

export const attemptAWSLogin = (email, password) => ({
    type: TYPES.ATTEMPT_AWS_LOGIN,
    payload: { email, password },
});

export const successfulAWSLogin = () => ({
    type: TYPES.SUCCESSFUL_AWS_LOGIN,
    payload: {},
});

export const failedAWSLogin = (error) => ({
    type: TYPES.FAILED_AWS_LOGIN,
    payload: { error: error.message },
});