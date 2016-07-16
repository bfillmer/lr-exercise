
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import { defaultStudents } from './boot';

const bootState = {
  min: 0,
  max: 0,
  average: 0,
  students: defaultStudents,
};

const reducer = (state = bootState) => state;

const logger = createLogger();

export const store = createStore(
  reducer,
  applyMiddleware(logger)
);
