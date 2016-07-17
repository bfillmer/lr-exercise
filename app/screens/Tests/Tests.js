
import React from 'react';

import { AddTest } from './Components/AddTest';
import { Statistics } from './Components/Statistics';
import { TestResults } from './Components/TestResults';

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
