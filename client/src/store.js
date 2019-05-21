import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

// adding sagas, and logger dev tool
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store;