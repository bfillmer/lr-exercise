
import { student } from './stateModels';

// Just an array of scores please.
const getScores = (students) => students.map((s) => s.score);

// Get the average from an array of scores.
const scoreAverage = (scores) => Math.round(scores.reduce((p, c) => (p + c)) / scores.length);

// Max & Min using spread to apply over an array.
const maxScore = (scores) => Math.max(...scores);
const minScore = (scores) => Math.min(...scores);

// CALCULATED_STATISTICS
// @TODO If you remove all students this blows up because there is no data to calculate against.
export const calculatedStatistics = (state) => {
  const currentScores = getScores(state.students);

  const [
    currentAverage,
    currentMax,
    currentMin,
  ] = [
    scoreAverage(currentScores),
    maxScore(currentScores),
    minScore(currentScores),
  ];

  return Object.assign({}, state, {
    min: currentMin,
    max: currentMax,
    average: currentAverage,
  });
};

// REMOVED_STUDENT
export const removedStudent = (state, action) => {
  // console.log('action', !action.payload.index);
  if (typeof action.payload.index === 'undefined') return state;
  return Object.assign({}, state, {
    students: state.students.filter((s) => s.index !== action.payload.index),
  });
};

// ADDED_STUDENT
export const addedStudent = (state, action) => {
  if (!action.payload.name && !action.payload.score) return state;
  return Object.assign({}, state, {
    students: [...state.students, student(
      state.students.length + 1,
      action.payload.name,
      parseInt(action.payload.score, 10)
    )],
  });
};

// UPDATED_STUDENT
export const updatedStudent = (state, action) => {
  if (!action.payload.index && !action.payload.name && !action.payload.score) return state;
  return Object.assign({}, state, {
    students: state.students.map((s) => {
      if (s.index !== action.payload.index) return s;
      return student(
        s.index,
        action.payload.name,
        action.payload.score
      );
    }),
  });
};
