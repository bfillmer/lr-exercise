
import React from 'react';

import { AddTest } from './AddTest';
import { Statistics } from './Statistics';
import { TestResults } from './TestResults';

export const Tests = (props) => (
  <div className = "container m-t-3">
    <h1 className = "text-primary">Classroom Test Score Management Screen</h1>
    <div className = "row m-t-3">
      <div className = "col-md-6">
        <AddTest />
        <Statistics />
      </div>
      <div className = "col-md-6">
        <TestResults { ...props } />
      </div>
    </div>
  </div>
);
