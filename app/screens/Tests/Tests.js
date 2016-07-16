
import React from 'react';

// @TODO Generalize the card and reuse.
// @TODO Mock out the table results.
// @TODO Start pulling components into smaller pieces.
// @TODO Boot data to include dummy scores.
// @TODO Make app store aware.

export const Tests = () => (
  <div className = "container m-t-3">
    <h1>Classroom Test Score Management Screen</h1>
    <div className = "row m-t-3">
      <div className = "col-md-6">
        <div className = "card card-inverse card-info">
          <div className = "card-block">
            <h4 className = "card-title">Add Student Test Score</h4>
            <div className = "form-group row">
              <label htmlFor = "student-name" className = "col-md-2 form-control-label">
                Name
              </label>
              <div className = "col-md-10">
                <input type = "text" className = "form-control" id = "student-name" />
              </div>
            </div>
            <div className = "form-group row">
              <label htmlFor = "student-test-score" className = "col-md-2 form-control-label">
                Score
              </label>
              <div className = "col-md-10">
                <input type = "number" className = "form-control" id = "student-test-score" />
              </div>
            </div>
            <div className = "row">
              <div className = "col-md-10 col-md-offset-2">
                <button type = "button" className = "btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className = "card card-inverse card-primary">
          <div className = "card-block">
            <h4 className = "card-title">Grade Statistics</h4>
            <ul className = "card-text list-unstyled m-b-0">
              <li><strong>Average Grade</strong></li>
              <li>Highest Grade</li>
              <li>Lowest Grade</li>
            </ul>
          </div>
        </div>
      </div>
      <div className = "col-md-6">
        <h2>Test Results</h2>
      </div>
    </div>
  </div>
);
