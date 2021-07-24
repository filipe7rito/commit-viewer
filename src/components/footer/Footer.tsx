import { css } from 'emotion';
import * as React from 'react';

export function Footer() {
  return <footer className={footerStyle}>@ 2019 codacy - Automated code review</footer>;
}

const footerStyle = css`
  display: flex;
  justify-content: start;
  font-size: 9px;
  height: 50px;
  padding-left: 40px;
  flex-shrink: 0;
  align-items: center;
  color: #4c6183;
  background-color: #f4f9ff;
  text-transform: uppercase;
`;
