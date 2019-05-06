import { all } from 'redux-saga/effects';
import loginWatcher from './awsLogin';
import logoutWatcher from './awsLogout';
import signupWatcher from './awsSignup';
import postPhotoWatcher from './awsPostPhoto';
import loadUserPhotosWatcher from './awsGetUserPhotos';

export default function* rootSaga() {
    yield all([
        loginWatcher(),
        logoutWatcher(),
        signupWatcher(),
        postPhotoWatcher(),
        loadUserPhotosWatcher(),
    ]);
};