import { all } from 'redux-saga/effects';
import loginWatcher from './awsLogin';
import logoutWatcher from './awsLogout';
import signupWatcher from './awsSignup';
import postPhotoWatcher from './awsPostPhoto';

export default function* rootSaga() {
    yield all([
        loginWatcher(),
        logoutWatcher(),
        signupWatcher(),
        postPhotoWatcher(),
    ]);
};