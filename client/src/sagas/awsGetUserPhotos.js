import { put, takeLatest, call } from 'redux-saga/effects';
import { API } from 'aws-amplify';
import * as types from '../constants/actionTypes';

async function attemptGetUserPhotos() {
    try {
        const response = await API.get('photos', '/userPhotos');
        console.log(response);
        return { response };
    } catch (error) {
        return { error };
    }
}

function* attemptAWSGetUserPhotos() {
    console.log('attemping aws get user photos in saga');

    const { response, error } = yield call(attemptGetUserPhotos);
    if (response) {
        yield put({ type: types.LOAD_PROFILE_SUCCESS, payload: { response } });
    } else {
        yield put({ type: types.LOAD_PROFILE_FAILED, payload: { error } });
    }
}

export default function* loadUserPhotosWatcher() {
    yield takeLatest(types.LOAD_PROFILE_ATTEMPT, attemptAWSGetUserPhotos);
}
