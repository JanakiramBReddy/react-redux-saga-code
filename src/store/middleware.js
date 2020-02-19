import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export default middleware;