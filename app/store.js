
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { testsReducers } from 'screens/Tests/Tests';

// @TODO Not sure I like this for future expansion, works for now.
// @TODO Clean up this and set it up in the component itself. This store
// should only get any and all sagas from other components and map them.
import {
  removeStudent,
  addStudent,
  updateStudent,
} from 'screens/Tests/sagas';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga () {
  yield [
    removeStudent(),
    addStudent(),
    updateStudent(),
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
