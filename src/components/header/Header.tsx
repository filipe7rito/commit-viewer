import { css, cx } from 'emotion';
import * as React from 'react';

export function Header() {
  return (
    <div className={headerStyle}>
      <nav className={logoStyle}>
        <a href="/">
          <div className={imageWrapperStyle}>
            <img src="https://app.codacy.com/static/media/codacy-logo.be9caad5.svg" alt="" />
          </div>
        </a>
      </nav>
      <nav className={searchWrapperStyle}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="search-input" className="col-form-label">
              Repository URL
            </label>
          </div>
          <div className={cx('input-group-sm col-auto', inputWrapperStyle)}>
            <input
              type="text"
              id="search-input"
              className={cx('form-control', searchInputStyle)}
              aria-describedby="search-input"
            />
          </div>
        </div>
        <div className="col-auto ms-2 mt-1">
          <button type="button" className="btn btn-primary btn-sm">
            Load commits
          </button>
        </div>
      </nav>
    </div>
  );
}

const searchWrapperStyle = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const inputWrapperStyle = css`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    color: white;
    border: 1px solid #0f6efd;
    -webkit-text-fill-color: white;
    box-shadow: 0 0 0px 1000px inherit inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  .form-control {
    background-color: inherit;
    color: white;
    border: 1px solid #0f6efd;

    :focus {
      color: white;
      background-color: inherit;
    }
  }
`;

const searchInputStyle = css`
  width: 400px !important;
`;

const imageWrapperStyle = css`
  width: 32px;
  height: 32px;
  margin: 16px 32px;
`;

const headerStyle = css`
  color: rgb(201, 216, 239);
  display: flex;
  background: rgb(23, 43, 77);
  align-items: center;
  position: sticky;
`;

const logoStyle = css`
  margin: 0px;
  min-width: 0px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
