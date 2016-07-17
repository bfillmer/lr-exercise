
import React from 'react';
import { mapReducers } from 'redux-map-reducers';

// React Components
import { AddTest } from './Components/AddTest';
import { Statistics } from './Components/Statistics';
import { TestResults } from './Components/TestResults';

// Saga & Store Actions
import {
  calculatedStatistics,
  removedStudent,
  addedStudent,
  updatedStudent,
} from './reducers';
import { defaultStudents } from './defaultStudents';

const defaultState = {
  min: 0,
  max: 0,
  average: 0,
  students: defaultStudents,
};

export const testsReducers = mapReducers({
  CALCULATED_STATISTICS: calculatedStatistics,
  REMOVED_STUDENT: removedStudent,
  ADDED_STUDENT: addedStudent,
  UPDATED_STUDENT: updatedStudent,
}, defaultState);

export const Tests = (props) => (
  <div className = "container m-t-3">
    <h1 className = "text-primary">Classroom Test Score Management</h1>
    <div className = "row m-t-3">
      <div className = "col-md-6">
        <AddTest { ...props } />
        <Statistics { ...props } />
      </div>
      <div className = "col-md-6">
        <TestResults { ...props } />
      </div>
    </div>
  </div>
);
