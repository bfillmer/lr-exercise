
import React, { PropTypes } from 'react';

export const Statistics = ({
  min,
  max,
  average,
}) => (
  <div className = "card card-inverse card-primary">
    <div className = "card-block">
      <h4 className = "card-title">Score Statistics</h4>
      <ul className = "card-text list-unstyled m-b-0">
        <li>
          <h5>
            <div className = "row">
              <div className = "col-xs-6 text-xs-right">Average Score</div>
              <div className = "col-xs-6 text-white">{ average }</div>
            </div>
          </h5>
        </li>
        <li>
          <div className = "row">
            <div className = "col-xs-6 text-xs-right">Highest Score</div>
            <div className = "col-xs-6 text-white">{ max }</div>
          </div>
        </li>
        <li>
          <div className = "row">
            <div className = "col-xs-6 text-xs-right">Lowest Score</div>
            <div className = "col-xs-6 text-white">{ min }</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

Statistics.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  average: PropTypes.number,
};
