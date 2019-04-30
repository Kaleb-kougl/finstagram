import { put, takeLatest, call } from 'redux-saga/effects';
import { Auth } from "aws-amplify";
import * as types from '../constants/actionTypes';

function checkSession() {
    return Auth.currentSession()
        .then(response => ({ response }))
        .catch(error => ({ error }));
}

function* checkAWSSession() {
    const { response, error } = yield call(checkSession);
    if (response) {
        yield put({ type: types.SUCCESSFUL_AWS_LOGIN, payload: {} });
    } else {
        console.log(response);
    }
}

export default function* checkSession() {
    yield
}