import * as TYPES from '../constants/actionTypes';

export const attemptAWSSignup = (email, password) => ({
    type: TYPES.AWS_SIGNUP_ATTEMPT,
    payload: { email, password },
});

export const successfulAWSSignup = (newUser) => ({
    type: TYPES.AWS_SIGNUP_SUCCESSFUL,
    payload: { newUser },
});

export const failedAWSSignup = (error) => ({
    type: TYPES.AWS_SIGNUP_FAILED,
    payload: { error: error.message },
});

export const attemptAWSConfirmSignup = (email, confirmationCode) => ({
    type: TYPES.AWS_CONFIRM_SIGNUP_ATTEMPT,
    payload: { email, confirmationCode },
});

export const successfulAWSConfirmSignup = () => ({
    type: TYPES.AWS_CONFIRM_SIGNUP_SUCCESSFUL,
    payload: {},
});

export const failedAWSConfirmSignup = (error) => ({
    type: TYPES.AWS_CONFIRM_SIGNUP_FAILED,
    payload: { error: error.message },
});