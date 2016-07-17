
import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

// Remove our student, then recalculate our statistics.
export function* removeStudent () {
  yield takeEvery('REMOVE_STUDENT', function* performRemove (action) {
    yield put({
      type: 'REMOVED_STUDENT',
      payload: action.payload,
    });
    yield put({
      type: 'CALCULATED_STATISTICS',
    });
  });
}

// Add a new student, then recalculate our statistics.
export function* addStudent () {
  yield takeEvery('ADD_STUDENT', function* performAdd (action) {
    yield put({
      type: 'ADDED_STUDENT',
      payload: action.payload,
    });
    yield put({
      type: 'CALCULATED_STATISTICS',
    });
  });
}

// Update an existing student, then recalculate our statistics.
export function* updateStudent () {
  yield takeEvery('UPDATE_STUDENT', function* performUpdate (action) {
    yield put({
      type: 'UPDATED_STUDENT',
      payload: action.payload,
    });
    yield put({
      type: 'CALCULATED_STATISTICS',
    });
  });
}
