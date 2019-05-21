import { put, takeLatest, call, select } from 'redux-saga/effects';
import { API } from 'aws-amplify';
import * as types from '../constants/actionTypes';

// this needs to be available from the store
const getPhotoId = ({ photoDetails }) => photoDetails.photoId;

async function attemptGetComments(photoId) {
    try {
        const dataPoints = await API.get('photos', `/comments/${photoId}`);

        const formattedCommentsData = dataPoints.map(({ commentText, userId }) => ({ commentText, userId }));
        console.log(formattedCommentsData);

        return { response: formattedCommentsData };
    } catch (error) {
        return { error };
    }
}

function* attemptAWSGetComments() {
    console.log('attemping aws get user photos in saga');

    const photoId = yield select(getPhotoId);

    const { response, error } = yield call(attemptGetComments, photoId);
    if (response) {
        console.log(response);
        yield put({ type: types.AWS_LOAD_COMMENTS_SUCCESSFUL, payload: { comments: response } });
    } else {
        console.log(error);
        yield put({ type: types.AWS_LOAD_COMMENTS_FAILED, payload: { error } });
    }
}

export default function* loadPhotoCommentsWatcher() {
    yield takeLatest(types.AWS_LOAD_COMMENTS_ATTEMPT, attemptAWSGetComments);
}
