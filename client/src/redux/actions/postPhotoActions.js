import * as TYPES from '../constants/actionTypes';

export const attemptAWSPostPhoto = ({ photo, description }) => ({
    type: TYPES.ATTEMPT_AWS_POST_PHOTO,
    payload: { photo, description }
});

export const successfulAWSPostPhoto = () => ({
    type: TYPES.SUCCESSFUL_AWS_POST_PHOTO,
    payload: {}
});

export const failedAWSPostPhoto = ({ error }) => ({
    type: TYPES.SUCCESSFUL_AWS_POST_PHOTO,
    payload: { error }
});