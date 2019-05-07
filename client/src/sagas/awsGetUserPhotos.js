import { put, takeLatest, call } from 'redux-saga/effects';
import { API, Storage } from 'aws-amplify';
import * as types from '../constants/actionTypes';

async function attemptGetUserPhotos() {
    try {
        const dataPoints = await API.get('photos', '/userPhotos');
        //Returns an array of promises
        const photosInVaultPromises = dataPoints.map(file => Storage.vault.get(file.photo));
        // wait for all promises to resolve
        const results = await Promise.all(photosInVaultPromises);
        // format data into a response
        const response = dataPoints.map((point, i) => ({ ...point, photo: results[i] }));
        return { response };
    } catch (error) {
        return { error };
    }
}

function* attemptAWSGetUserPhotos() {
    console.log('attemping aws get user photos in saga');

    const { response, error } = yield call(attemptGetUserPhotos);
    if (response) {
        yield put({ type: types.LOAD_PROFILE_SUCCESS, payload: { photos: response } });
    } else {
        yield put({ type: types.LOAD_PROFILE_FAILED, payload: { error } });
    }
}

export default function* loadUserPhotosWatcher() {
    yield takeLatest(types.LOAD_PROFILE_ATTEMPT, attemptAWSGetUserPhotos);
}
