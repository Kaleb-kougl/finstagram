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
        yield put({ type: types.AWS_LOGOUT_SUCCESSFUL, payload: {} });
    } else {
        console.log(error);
        yield put({ type: types.AWS_LOGOUT_FAILED, payload: { error } });
    }
}

export default function* logoutWatcher() {
    yield takeLatest(types.AWS_LOGOUT_ATTEMPT, attemptAWSLogout);
}
