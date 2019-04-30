import { all, } from 'redux-saga/effects';
import attemptAWSLoginWatcher from './awsLogin';
import logoutWatcher from './awsLogout';

export default function* rootSaga() {
    yield all([
        attemptAWSLoginWatcher(),
        logoutWatcher(),
    ]);
};