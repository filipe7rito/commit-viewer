import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';

const AnalysistBtn = ({ onReAnalyse, status }) => {
  if (status === 'error') {
    return (
      <div>
        <a data-tip="Please contact support">
          <button type="button" class="btn btn btn-danger btn-sm">
            <FontAwesomeIcon icon="times-circle" className="mr-2" />
            Something went wrong
          </button>
        </a>
        <ReactTooltip
          place="top"
          type="light"
          effect="solid"
          html={true}
          border={true}
        />
      </div>
    );
  } else if (status === 'loading') {
    return (
      <div>
        <button type="button" class="btn btn-info btn-sm">
          <FontAwesomeIcon icon="redo" className="mr-2" />
          Re-analysing...
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <a data-tip="If patterns were changed, this will  <br />  trigger a full analysis to the latest  <br /> commit applying all changes">
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            onClick={e => {
              return onReAnalyse(e);
            }}
          >
            <FontAwesomeIcon icon="redo" className="mr-2" />
            Re-analyse latest commit
          </button>
        </a>
        <ReactTooltip
          place="top"
          type="light"
          effect="solid"
          html={true}
          border={true}
        />
      </div>
    );
  }
};

export default AnalysistBtn;
