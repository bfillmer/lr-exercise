
import React, { Component, PropTypes } from 'react';

import { TableRow } from './TableRow';

export const TestResults = ({
  students,
  action,
}) => (
  <table className = "table table-striped table-hover">
    <colgroup>
      <col width = "75%"></col>
      <col width = "15%"></col>
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
      { students.map((s) => (
        <TableRow key = { s.index } action = { action } student = { s } />
      )) }
    </tbody>
  </table>
);

TestResults.propTypes = {
  action: PropTypes.func.isRequired,
  students: PropTypes.array.isRequired,
};
