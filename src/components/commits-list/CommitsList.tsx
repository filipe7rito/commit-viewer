import { css } from 'emotion';
import * as React from 'react';
import { useState } from 'react';
import { useCommits } from '../../state';
import { User } from '../../types/user';
import { EmptyState } from './empty-state';
import { Table } from './table';

const PAGE_SIZE = 10;

export function CommitsList({ user }: { user: User | undefined }) {
  if (!user) {
    return (
      <div className={listWrapperStyle}>
        <div className={listHeaderStyle}>
          <div>Commits list</div>
        </div>
        <EmptyState note="Your commits will show up here" />
      </div>
    );
  }

  const [page, setPage] = useState<number>(0);
  const [filter, setFilter] = useState('');

  const handleFetchData = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const { commits, isFetching, hasMore, error } = useCommits({
    user,
    pageSize: PAGE_SIZE,
    pageNumber: page,
  });

  if (error || (commits.length === 0 && !isFetching)) {
    return (
      <div className={listWrapperStyle}>
        <div className={listHeaderStyle}>
          <div>Commits list</div>
        </div>
        <EmptyState note="We couldn’t get the commits for this repository" />;{' '}
      </div>
    );
  }

  if (isFetching && commits.length === 0) {
    return (
      <div className={listWrapperStyle}>
        <div className={listHeaderStyle}>
          <div>Commits list</div>
        </div>
        <EmptyState />
      </div>
    );
  }

  return (
    <div className={listWrapperStyle}>
      <div className={listHeaderStyle}>
        <div>Commits list</div>
        <div className={searchStyle}>
          <label htmlFor="searchInput" className="form-label">
            Search
          </label>
          <input
            id="searchInput"
            value={filter}
            type="text"
            placeholder="Search"
            className="form-control form-control-sm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <Table
        data={commits}
        hasMore={hasMore}
        loading={isFetching}
        filterQuery={filter}
        fetchData={handleFetchData}
      />
    </div>
  );
}

const listWrapperStyle = css`
  > div {
    padding: 32px;
  }
`;

const listHeaderStyle = css`
  height: 160px;
  background: #f4f9ff;

  div :first-of-type {
    font-size: 24px;
    font-weight: bold;
  }
`;

const searchStyle = css`
  width: 280px !important;
  margin-bottom: 6px !important;

  margin: 10px 0px;
  label {
    color: #7e90b2;
    font-size: 14px;
  }
`;
