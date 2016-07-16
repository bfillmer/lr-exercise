
import React from 'react';

export const AddTest = () => (
  <div className = "card card-inverse card-info">
    <div className = "card-block">
      <h4 className = "card-title">Add Student Test Score</h4>
      <div className = "form-group row m-t-2">
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
        <div className = "col-md-3">
          <input type = "number" className = "form-control" id = "student-test-score" />
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-10 col-md-offset-2">
          <button type = "button" className = "btn btn-primary">
            <i className = "fa fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  </div>
);
