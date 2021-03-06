import { put, takeLatest, select, call } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import * as types from '../constants/actionTypes';

const getSignupEmail = ({ signup }) => signup.email;
const getSignupPassword = ({ signup }) => signup.password;
const getConfirmationCode = ({ signup }) => signup.confirmationCode;

function attemptSignup(email, password) {
    return Auth.signUp(email, password)
        .then(response => ({ response }))
        .catch(error => ({ error }))
}

function attemptConfirmation(email, confirmationCode) {
    return Auth.confirmSignUp(email, confirmationCode)
        .then(response => ({ response }))
        .catch(error => ({ error }));
}

function* attemptAWSSignup() {
    console.log('attempting aws signup in saga');

    const email = yield select(getSignupEmail);
    const password = yield select(getSignupPassword);

    const { response, error } = yield call(attemptSignup, email, password);
    if (response) {
        console.log('saga', response);
        yield put({ type: types.AWS_SIGNUP_SUCCESSFUL, payload: { newUser: response } });
    } else {
        console.log('saga', error);
        yield put({ type: types.AWS_SIGNUP_FAILED, payload: { error } });
    }
}

function* attemptAWSConfirmation() {
    console.log('attempting aws confirmation in saga');

    const email = yield select(getSignupEmail);
    const confirmationCode = yield select(getConfirmationCode);

    const { response, error } = yield call(attemptConfirmation, email, confirmationCode);
    if (response) {
        console.log('saga', response);
        yield put({ type: types.AWS_CONFIRM_SIGNUP_SUCCESSFUL, payload: {} });
    } else {
        console.log('saga', error);
        yield put({ type: types.AWS_CONFIRM_SIGNUP_FAILED, payload: { error } });
    }
}

export default function* signupWatcher() {
    yield takeLatest(types.AWS_SIGNUP_ATTEMPT, attemptAWSSignup);
    yield takeLatest(types.AWS_CONFIRM_SIGNUP_ATTEMPT, attemptAWSConfirmation);
}