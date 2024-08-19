import React from 'react';
import './ProgressBar.css'; // Ensure this CSS file is updated

const ProgressBar = ({ percentage, technology }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-label">
        {technology}
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="progress-bar-percentage">
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
