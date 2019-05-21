import * as TYPES from '../constants/actionTypes';

export const attemptAWSLoadPhotoComments = (photoId) => ({
    type: TYPES.AWS_LOAD_COMMENTS_ATTEMPT,
    payload: { photoId },
});

export const successfulAWSLoadPhotoComments = (photos) => ({
    type: TYPES.AWS_LOAD_COMMENTS_SUCCESSFUL,
    payload: { photos: photos },
});

export const failedAWSLoadPhotoComments = (error) => ({
    type: TYPES.AWS_LOAD_COMMENTS_FAILED,
    payload: { error: error.message },
});

export const clearPhotoDetails = () => ({
    type: TYPES.CLEAR_PHOTO_DETAILS,
    payload: {},
});