
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

// @NOTE The most popular boy & girl names in America, randomly generated scores.
const bootState = {
  min: 0,
  max: 0,
  average: 0,
  students: [
    {
      id: 1,
      name: 'Emma',
      score: 100,
    },
    {
      id: 1,
      name: 'Noah',
      score: 0,
    },
    {
      id: 1,
      name: 'Olivia',
      score: 0,
    },
    {
      id: 1,
      name: 'Liam',
      score: 0,
    },
    {
      id: 1,
      name: 'Sophia',
      score: 0,
    },
    {
      id: 1,
      name: 'Mason',
      score: 0,
    },
    {
      id: 1,
      name: 'Ava',
      score: 0,
    },
    {
      id: 1,
      name: 'Jacob',
      score: 0,
    },
  ],
};

const reducer = (state = bootState) => state;

const logger = createLogger();

export const store = createStore(
  reducer,
  applyMiddleware(logger)
);
