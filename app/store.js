
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { testsReducers } from 'screens/Tests/Tests';

const sagaMiddleware = createSagaMiddleware();

// const reducer = (state = defaultState) => state;

const logger = createLogger();

export const store = createStore(
  testsReducers,
  applyMiddleware(sagaMiddleware, logger)
);

// Run initial statistics calculation.
store.dispatch({
  type: 'CALCULATED_STATISTICS',
});

// sagaMiddleware.run();
