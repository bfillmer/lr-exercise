
import { student } from 'stateModels';

// Just an array of scores please.
const getScores = (students) => students.map((s) => s.score);

// Get the average from an array of scores.
const scoreAverage = (scores) => scores.reduce((p, c) => (p + c)) / scores.length;

// Max & Min using spread to apply over an array.
const maxScore = (scores) => Math.max(...scores);
const minScore = (scores) => Math.min(...scores);

// CALCULATED_STATISTICS
export const calculatedStatistics = (state) => {
  const currentScores = getScores(state.students);

  const {
    currentAverage,
    currentMax,
    currentMin,
  } = [
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
  if (!action.payload.index) return state;
  return Object.assign({}, state, {
    students: state.students.filter((s) => s.index !== action.payload.index),
  });
};

// ADDED_STUDENT
export const addedStudent = (state, action) => {
  if (!action.payload.name && !action.payload.score) return state;
  return Object.assign({}, state, {
    students: state.students.push(student(
      state.students.length + 1,
      action.payload.name,
      action.payload.score
    )),
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
