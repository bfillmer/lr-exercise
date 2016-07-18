
import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

// Similar structure for all our actions, perform the actual action then
// recalculate our statistics.
const performActionFactory = (type) => function* performAction (action) {
  yield put({
    type,
    payload: action.payload,
  });
  yield put({
    type: 'CALCULATED_STATISTICS',
  });
};

const performRemove = performActionFactory('REMOVED_STUDENT');
const performAdd = performActionFactory('ADDED_STUDENT');
const performUpdate = performActionFactory('UPDATED_STUDENT');

// Remove our student, then recalculate our statistics.
export function* removeStudent () {
  yield takeEvery('REMOVE_STUDENT', performRemove);
}

// Add a new student, then recalculate our statistics.
export function* addStudent () {
  yield takeEvery('ADD_STUDENT', performAdd);
}

// Update an existing student, then recalculate our statistics.
export function* updateStudent () {
  yield takeEvery('UPDATE_STUDENT', performUpdate);
}
