import { put, takeLatest, select, call } from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import * as types from '../constants/actionTypes';
// import store from '../store';

const getEmail = ({ user }) => user.email;
const getPassword = ({ user }) => user.password;

async function attemptLogin(email, password) {
    try {
        const response = await Auth.signIn(email, password);
        return { response };
    } catch (error) {
        return { error };
    }
}

function* attemptAWSLogin() {
    console.log('attempting aws login in saga');
    // Auth.signIn()
    const email = yield select(getEmail);
    const password = yield select(getPassword);

    const { response, error } = yield call(attemptLogin, email, password);
    if (response) {
        yield put({ type: types.AWS_LOGIN_SUCCESSFUL, payload: {} });
    } else {
        yield put({ type: types.AWS_LOGIN_FAILED, payload: { error } });
    }
}

export default function* loginWatcher() {
    yield takeLatest(types.AWS_LOGIN_ATTEMPT, attemptAWSLogin);
}
