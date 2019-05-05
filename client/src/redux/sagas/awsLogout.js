import { put, takeLatest, call } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import * as types from '../constants/actionTypes';

async function attemptLogout() {
    try {
        const response = await Auth.signOut()
        return { response };
    } catch (error) {
        return { error };
    }
}

function* attemptAWSLogout() {
    const { signedOut, error } = yield call(attemptLogout);
    if (signedOut) {
        yield put({ type: types.SUCCESSFUL_AWS_LOGOUT, payload: {} });
    } else {
        console.log(error);
        yield put({ type: types.FAILED_AWS_LOGOUT, payload: { error } });
    }
}

export default function* logoutWatcher() {
    yield takeLatest(types.ATTEMPT_AWS_LOGOUT, attemptAWSLogout);
}
