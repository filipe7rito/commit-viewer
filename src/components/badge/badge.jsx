import React from 'react';
import './badge.css';

const Badge = ({ isUpToSandard }) => {
  return (
    <h5>
      {isUpToSandard ? (
        <span className="badge badge-success">Up to Standard</span>
      ) : (
        <span className="badge badge-danger">Not up to Standard</span>
      )}
    </h5>
  );
};

export default Badge;
