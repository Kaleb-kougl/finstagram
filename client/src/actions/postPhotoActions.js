import * as TYPES from '../constants/actionTypes';

export const attemptAWSPostPhoto = ({ photo, description }) => ({
    type: TYPES.AWS_POST_PHOTO_ATTEMPT,
    payload: { photo, description }
});

export const successfulAWSPostPhoto = ({ isSuccess }) => ({
    type: TYPES.AWS_POST_PHOTO_SUCCESSFUL,
    payload: { isSuccess }
});

export const failedAWSPostPhoto = ({ error }) => ({
    type: TYPES.AWS_POST_PHOTO_FAILED,
    payload: { error }
});