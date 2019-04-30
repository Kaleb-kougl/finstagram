import { put, takeLatest, select, call } from 'redux-saga/effects';
import { Auth } from "aws-amplify";
import * as types from '../constants/actionTypes';
// import store from '../store';

const getEmail = ({ user }) => user.email;
const getPassword = ({ user }) => user.password;

function attemptLogin(email, password) {
    return Auth.signIn(email, password)
        .then(response => ({ response }))
        .catch(error => ({ error }));
}

function* attemptAWSLogin() {
    console.log('attempting aws login in saga');
    // Auth.signIn()
    const email = yield select(getEmail);
    const password = yield select(getPassword);

    // questionable below this line

    const { response, error } = yield call(attemptLogin, email, password);
    if (response) {
        yield put({ type: types.SUCCESSFUL_AWS_LOGIN, payload: {} });
    } else {
        yield put({ type: types.FAILED_AWS_LOGIN, payload: { error } });
    }
}

export default function* attemptAWSLoginWatcher() {
    yield takeLatest(types.ATTEMPT_AWS_LOGIN, attemptAWSLogin);
}
