
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

const bootState = {
  min: 0,
  max: 0,
  average: 0,
};

const reducer = (state = bootState) => state;

const logger = createLogger();

export const store = createStore(
  reducer,
  applyMiddleware(logger)
);
