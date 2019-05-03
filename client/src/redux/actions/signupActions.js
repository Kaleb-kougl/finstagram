import * as TYPES from '../constants/actionTypes';

export const attemptAWSSignup = (email, password) => ({
    type: TYPES.ATTEMPT_AWS_SIGNUP,
    payload: { email, password },
});

export const successfulAWSSignup = (newUser) => ({
    type: TYPES.SUCCESSFUL_AWS_SIGNUP,
    payload: { newUser },
});

export const failedAWSSignup = (error) => ({
    type: TYPES.FAILED_AWS_SIGNUP,
    payload: { error: error.message },
});

export const attemptAWSConfirmSignup = (email, confirmationCode) => ({
    type: TYPES.ATTEMPT_AWS_CONFIRM_SIGNUP,
    payload: { email, confirmationCode },
});

export const successfulAWSConfirmSignup = () => ({
    type: TYPES.SUCCESSFUL_AWS_CONFIRM_SIGNUP,
    payload: {},
});

export const failedAWSConfirmSignup = (error) => ({
    type: TYPES.FAILED_AWS_CONFIRM_SIGNUP,
    payload: { error: error.message },
});