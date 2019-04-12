import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import openSocket from 'socket.io-client';
import rootReducer from './reducers';
import sagas from './sagas';

const socket = openSocket('http://localhost:5000');
const sagaMiddleware = createSagaMiddleware();

// Anytime the socket recieves an event from the server, dispatch it to the store
socket.on('EVENT', (data) => {
    console.log(data);
    store.dispatch(data);
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas, { socket });

export default store;