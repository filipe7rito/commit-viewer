import { css, cx } from 'emotion';
import * as React from 'react';
import { DashboardLogo } from '../../images';
import { CommitsLogo } from '../../images/CommitsLogo';
import { FilesLogo } from '../../images/FilesLogo';
import { IssuesLogo } from '../../images/IssuesLogo';
import { PullRequestsLogo } from '../../images/PullRequestsLogo';
import { SecurityLogo } from '../../images/SecurityLogo';

export function Menu() {
  return (
    <ul className={cx('nav flex-column', menuStyle)}>
      <li>
        <img
          src="https://app.codacy.com/legacy/versioned/images/navigation/arrow-back.svg"
          alt="back-arrow"
        />
        Team
        <hr />
      </li>
      <li>
        <DashboardLogo />
        Dashboard
      </li>
      <li className={navOptionActiveStyle}>
        <CommitsLogo />
        Commits
      </li>
      <li>
        <FilesLogo />
        Files
      </li>
      <li>
        <IssuesLogo />
        Issues
      </li>
      <li>
        <PullRequestsLogo />
        Pull Requests
      </li>
      <li>
        <SecurityLogo />
        Security
      </li>
    </ul>
  );
}

const menuOptionStyle = css`
  text-align: center;
  font-size: 12px;
  padding: 12px 8px;
  line-height: 15px;

  > svg {
    display: block;
    margin: auto auto 4px;
    height: 25px;
    fill: rgb(182, 198, 224);
  }
  cursor: pointer;
`;

const menuStyle = css`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: 96px;
  min-height: 100%;
  background-color: rgb(235, 241, 255);

  li {
    ${menuOptionStyle}
  }

  li:first-of-type {
    padding: 0;
  }
  li:nth-of-type(2) {
    padding-top: 0;
  }
`;

const navOptionActiveStyle = css`
  font-weight: bold !important;

  > svg {
    fill: #2a6cff !important;
  }
`;
