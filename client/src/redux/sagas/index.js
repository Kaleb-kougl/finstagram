import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import store from '../store';

function* attemptAWSLogin() {
    console.log('attempting fb login in saga');

    const json = yield fetch('http://localhost:5000/auth/facebook', {
        credentials: "include"
    })
        .then(res => res.json());

    // This is a full description of the action that will be dispatched
    yield put({ type: types.SUCCESSFUL_FB_LOGIN, payload: json });
}

function* actionWatcher() {
    yield takeLatest(types.ATTEMPT_FB_LOGIN, attemptAWSLogin);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
};