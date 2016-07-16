
import React, { PropTypes } from 'react';

export const TestResults = ({
  students,
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
        <tr key = { k }>
          <td>
            <a className = "cursor-text">
              { s.name }
            </a>
          </td>
          <td className = "text-xs-center">
            <a className = "cursor-text">
              { s.score }
            </a>
          </td>
          <td className = "text-xs-center">
            <a className = "cursor-pointer text-danger">
              <i className = "fa fa-times-circle"></i>
            </a>
          </td>
        </tr>
      )) }
    </tbody>
  </table>
);

TestResults.propTypes = {
  students: PropTypes.array.isRequired,
};
