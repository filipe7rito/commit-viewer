import React from 'react';
import './displayField.css';

const DisplatField = ({ label, value, textClass }) => {
  const displayValue = value > 0 ? `+ ${value}` : value;
  return (
    <div className="display">
      <div className={`displayValue ${textClass}`}>{displayValue}</div>
      <div className="displayLabel">{label}</div>
    </div>
  );
};

export default DisplatField;
