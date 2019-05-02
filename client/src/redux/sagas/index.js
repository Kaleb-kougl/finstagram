import { all } from 'redux-saga/effects';
import attemptAWSLoginWatcher from './awsLogin';
import logoutWatcher from './awsLogout';
import attemptAWSSignupWatcher from './awsSignup';

export default function* rootSaga() {
    yield all([
        attemptAWSLoginWatcher(),
        logoutWatcher(),
        attemptAWSSignupWatcher(),
    ]);
};