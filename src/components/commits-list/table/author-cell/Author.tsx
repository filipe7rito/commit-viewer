import { css } from 'emotion';
import * as React from 'react';

export function Author({ avatarUrl, name }: { avatarUrl: string; name: string }) {
  return (
    <div className={authorStyle}>
      <div className={avatarStyle}>
        <img src={`${avatarUrl}`} alt="avatar" />
      </div>
      <div>{name}</div>
    </div>
  );
}

const authorStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const avatarStyle = css`
  img {
    border-radius: 50%;
    width: 32px;
    height: 32x;
    margin-right: 10px;
  }
`;
