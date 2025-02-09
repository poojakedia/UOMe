import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value1, value2 }) => {
  const total = value1 + value2;

  const percentage1 = total > 0 ? (value1 / total) * 100 : 0;
  const percentage2 = total > 0 ? (value2 / total) * 100 : 0;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-segment1"
          style={{ width: `${percentage1}%` }}
          role="progressbar"
          aria-valuenow={value1}
          aria-valuemin={0}
          aria-valuemax={total}
        >
          <span className="sr-only">{`${value1} out of ${total}`}</span>
        </div>
        <div
          className="progress-segment2"
          style={{ width: `${percentage2}%` }}
          role="progressbar"
          aria-valuenow={value2}
          aria-valuemin={0}
          aria-valuemax={total}
        >
          <span className="sr-only">{`${value2} out of ${total}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
