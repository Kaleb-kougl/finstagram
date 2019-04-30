import { put, takeLatest, call } from 'redux-saga/effects';
import { Auth } from "aws-amplify";
import * as types from '../constants/actionTypes';

function attemptLogout() {
    return Auth.signOut()
        .then(response => {
            console.log(response);
            return { signedOut: true }
        })
        .catch(error => ({ error }));
}

function* attemptAWSLogout() {
    const { signedOut, error } = yield call(attemptLogout);
    if (signedOut) {
        yield put({ type: types.SUCCESSFUL_LOGOUT, payload: {} });
    } else {
        console.log(error);
        yield put({ type: types.FAILED_LOGOUT, payload: { error } });
    }
}

export default function* logoutWatcher() {
    yield takeLatest(types.LOGOUT, attemptAWSLogout);
}
