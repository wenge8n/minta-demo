import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from '@redux-devtools/extension';
import logger from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
);

sagas.forEach(saga => sagaMiddleware.run(saga));
