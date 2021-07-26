import { css, cx } from 'emotion';
import * as React from 'react';

export function EmptyRow({ isLoading }: { isLoading: boolean }) {
  return (
    <tr>
      <td className={tdStyle}>
        <div className={authorPlaceholderStyle}>
          <div
            className={cx(avatarPlaceholderStyle, {
              [fadeStyle]: isLoading,
              [blurredStyle]: !isLoading,
            })}
          />
          <div
            className={cx(placeholderStyle, { [fadeStyle]: isLoading, [blurredStyle]: !isLoading })}
          />
        </div>
      </td>
      <td className={tdStyle}>
        <div
          className={cx(placeholderStyle, { [fadeStyle]: isLoading, [blurredStyle]: !isLoading })}
        />
      </td>
      <td className={tdStyle}>
        <div
          className={cx(placeholderStyle, { [fadeStyle]: isLoading, [blurredStyle]: !isLoading })}
        />
      </td>
      <td className={tdStyle}>
        <div
          className={cx(placeholderStyle, { [fadeStyle]: isLoading, [blurredStyle]: !isLoading })}
        />
      </td>
    </tr>
  );
}

const tdStyle = css`
  height: 40px;
`;

const authorPlaceholderStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const avatarPlaceholderStyle = css`
  border-radius: 80px;
  height: 32px;
  width: 32px;
  margin-right: 10px;
`;

const placeholderStyle = css`
  height: 10px;
  width: 80%;
  border-radius: 80px;
`;

const fadeStyle = css`
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: linear-gradient(to right, #fafafa 8%, #e5ecf5 38%, #fafafa 54%);
  background-size: 1000px 640px;

  position: relative;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

const blurredStyle = css`
  background-color: #eaf0f8;
  filter: blur(1px);
`;
