import { css } from 'emotion';
import * as React from 'react';

export function Label({ children }: { children: React.ReactNode }) {
  return <span className={labelStyle}>{children}</span>;
}

const labelStyle = css`
  background-color: #ecf2ff;
  color: #0035aa;
  border-radius: 3px;
  padding: 0.2em 1em;
  font-size: calc(14px - 2px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.05em;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  margin-left: 5px;
`;
