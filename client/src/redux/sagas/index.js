import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import store from '../store';

const handleLogin = function* handleLogin(params) {
    console.log('PARAMS', params);
    // grab every dispatched login
    // yield takeEvery(types.LOGIN, (action) => {
    //     params.socket.emit('login', action);
    // })
    // yield takeEvery('user', (user) => {
    //     // dispatch to store...
    //     store.dispatch
    // })
}

export default handleLogin;