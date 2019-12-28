import React from 'react';
import './analysis.css';
import DisplatField from './../common/displayField';
import Badge from '../badge/badge';
import AnalysisBtn from './analysisBtn/analysisBtn';

const Analisys = ({ comparison, status, onReAnalyse }) => {
  const { change, up_to_standards, id } = comparison;

  return (
    <div className="analysis m-3">
      <div className="changes">
        <div className="badgeDiv">
          {id && <Badge isUpToSandard={up_to_standards}></Badge>}
        </div>
        <div className="statistics">
          <DisplatField
            label={'Issues'}
            value={change.issues}
            textClass="text-danger"
          ></DisplatField>
          <DisplatField
            label={'Duplication'}
            value={change.duplication}
          ></DisplatField>
          <DisplatField
            label={'Complexity'}
            value={change.complexity}
          ></DisplatField>
          <DisplatField
            label={'Coverage'}
            value={change.coverage}
            textClass="text-success"
          ></DisplatField>
        </div>
      </div>
      <div className="comparison">
        <div className="analysisBtn">
          <AnalysisBtn onReAnalyse={onReAnalyse} status={status}></AnalysisBtn>
        </div>
        <div>
          <label className="label mr-2">Comparison ID: </label>
          <span>{id}</span>
        </div>
      </div>
    </div>
  );
};

export default Analisys;
