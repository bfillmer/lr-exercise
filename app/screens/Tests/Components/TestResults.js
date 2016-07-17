
import React, { PropTypes } from 'react';
import classNames from 'classnames';

import {
  removeStudent,
} from 'screens/Tests/store';

const TableRow = ({
  action,
  student,
}) => {
  const rowClasses = classNames({
    'table-danger': student.score <= 65,
  });

  return (
    <tr className = { rowClasses }>
      <td>
        <a className = "cursor-text">
          { student.name }
        </a>
      </td>
      <td className = "text-xs-center">
        <a className = "cursor-text">
          { student.score }
        </a>
      </td>
      <td className = "text-xs-center">
        <a
          className = "cursor-pointer text-danger"
          onClick = { () => action(removeStudent(student.index)) }
        >
          <i className = "fa fa-times-circle"></i>
        </a>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  action: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
};

export const TestResults = ({
  students,
  action,
}) => (
  <table className = "table table-striped table-hover">
    <colgroup>
      <col width = "80%"></col>
      <col width = "10%"></col>
      <col width = "10%"></col>
    </colgroup>
    <thead className = "thead-inverse">
      <tr>
        <th>Name</th>
        <th className = "text-xs-center">Score</th>
        <th className = "text-xs-center"></th>
      </tr>
    </thead>
    <tbody>
      { students.map((s, k) => (
        <TableRow key = { k } action = { action } student = { s } />
      )) }
    </tbody>
  </table>
);

TestResults.propTypes = {
  action: PropTypes.func.isRequired,
  students: PropTypes.array.isRequired,
};
