import { css } from 'emotion';
import React from 'react';
import { EmptyRow } from '../table/empty-row';

// eslint-disable-next-line react/require-default-props
export function EmptyState({ note }: { note?: string }) {
  return (
    <div className={wrapperStyle}>
      <div className={noteStyle}>{note}</div>
      <table>
        <thead />
        <tbody>
          {[1, 2, 3, 4].map((val) => (
            <EmptyRow key={val} isLoading={false} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const noteStyle = css`
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #4c6183;
  font-weight: 600;
  font-size: 15px;
`;

const wrapperStyle = css`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  table {
    display: flex;
    flex-flow: column;
    height: 100%;
    border-collapse: separate;
  }
  table thead {
    flex: 0 0 auto;
    width: calc(100% - 0.1em);
    border-bottom: 1px solid rgb(235, 236, 240);
  }
  table tbody {
    flex: 1 1 auto;
    display: block;
    overflow-y: scroll;
    border-bottom: 1px solid rgb(235, 236, 240);
  }
  table tbody tr {
    width: 100%;
    border-bottom: 1px solid rgb(235, 236, 240);

    td {
      padding: 2px 20px;
    }
  }

  thead tr th {
    line-height: 30px;
    text-align: left;
    font-size: 10px;
    color: rgb(108, 120, 139);
    padding: 8px 0px 0px 2px;
    font-weight: 400;
    text-transform: uppercase;
  }

  table thead,
  table tbody tr {
    line-height: 40px;
    font-size: 14px;
    display: table;
    table-layout: fixed;
  }
`;
