import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/RelativeTime';
import { css } from 'emotion';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Column, useGlobalFilter, useTable, UseTableCellProps } from 'react-table';
import { Commit } from '../../../types/commit';
import { Author } from './author-cell';
import { EmptyRow } from './empty-row';
import { Label } from './label/Label';

export function Table({
  data,
  hasMore,
  loading,
  filterQuery,
  fetchData,
}: {
  data: Commit[];
  hasMore: boolean;
  loading: boolean;
  filterQuery: string;
  fetchData: () => void;
}) {
  const columns: Column<Commit>[] = useMemo(() => {
    return [
      {
        Header: 'Author',
        width: '20%',
        accessor: (record: Commit) => {
          return record.author.name;
        },
        Cell: function Cell(options: UseTableCellProps<Commit>) {
          const { row } = options;
          const { original: commit } = row;

          return <Author avatarUrl={commit.author.avatarUrl} name={commit.author.name} />;
        },
      },
      {
        Header: 'Commit',
        width: '20%',
        id: 'sha',
        accessor: 'sha',
        Cell: function Cell(options: UseTableCellProps<Commit>) {
          const { row } = options;
          const { original: commit } = row;

          const wasMergedCommit = commit.parents.length > 1;

          return (
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
              `}
            >
              <span>{commit.sha.slice(-7)}</span>
              {wasMergedCommit && <Label>Merge</Label>}
            </div>
          );
        },
      },
      {
        Header: 'Message',
        width: '30%',
        id: 'message',
        accessor: 'message',
        Cell: function Cell(options: UseTableCellProps<Commit>) {
          const { value } = options;

          return (
            <div
              className={css`
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              `}
            >
              {value}
            </div>
          );
        },
      },
      {
        Header: 'Created',

        accessor: (record: Commit) => {
          const { author } = record;
          dayjs.extend(relativeTime);

          return <>{dayjs(author.date).fromNow()}</>;
        },
      },
    ];
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
  );

  const { headerGroups, rows, prepareRow, setGlobalFilter } = tableInstance;

  useEffect(() => {
    setGlobalFilter(filterQuery);
  }, [filterQuery, setGlobalFilter, data]);

  const observer = useRef<IntersectionObserver>();

  const lastRowReference = useCallback(
    (node: HTMLTableRowElement) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          !filterQuery &&
          hasMore &&
          entries[0].intersectionRatio < 1
        ) {
          fetchData();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading],
  );

  const renderLoadingRows = () => {
    return loading && [1, 2].map((val) => <EmptyRow key={val} isLoading />);
  };

  return (
    <div className={wrapperStyle}>
      <table role="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th
                    {...column.getHeaderProps({
                      style: {
                        minWidth: column.minWidth,
                        width: column.width,
                      },
                    })}
                  >
                    <div>{column.render('Header')}</div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody data-testid="table-body">
          {rows.map((row, index) => {
            prepareRow(row);

            const isLastRow = data.length === index + 1;

            return (
              <tr
                {...row.getRowProps()}
                ref={isLastRow ? lastRowReference : undefined}
                data-testid={`table-row-${index}`}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps({
                        style: {
                          minWidth: cell.column.minWidth,
                          width: cell.column.width,
                        },
                      })}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {renderLoadingRows()}
        </tbody>
      </table>
    </div>
  );
}

const wrapperStyle = css`
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
    height: 50vh;
    border-bottom: 1px solid rgb(235, 236, 240);
  }
  table tbody tr {
    width: 100%;
    border-bottom: 1px solid rgb(235, 236, 240);

    :hover {
      cursor: pointer;
      background-color: rgb(248, 248, 248);
    }

    td {
      padding: 2px 20px;
    }
  }

  thead tr th {
    line-height: 30px;
    text-align: left;
    font-size: 10px;
    color: rgb(108, 120, 139);
    padding: 8px 0px 0px 20px;
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
