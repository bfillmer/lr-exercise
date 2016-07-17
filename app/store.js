
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { testsReducers } from 'screens/Tests/Tests';

// @TODO Not sure I like this for future expansion, works for now.
import { removeStudent } from 'screens/Tests/sagas';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga () {
  yield [
    removeStudent(),
  ];
}

const logger = createLogger();

export const store = createStore(
  testsReducers,
  applyMiddleware(sagaMiddleware, logger)
);

// Run initial statistics calculation.
store.dispatch({
  type: 'CALCULATED_STATISTICS',
});

sagaMiddleware.run(rootSaga);
