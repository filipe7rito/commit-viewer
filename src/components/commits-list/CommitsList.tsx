import { css } from 'emotion';
import * as React from 'react';
import { useRef, useState } from 'react';
import { useCommits } from '../../state';
import { GithubInfo } from '../../types/githubInfo';
import { EmptyState } from './empty-state';
import { Table } from './table';

const PAGE_SIZE = 10;

export function CommitsList({ githubInfo }: { githubInfo: GithubInfo | undefined }) {
  // Initial state when we don't have info from github
  if (!githubInfo) {
    return (
      <div className={listWrapperStyle}>
        <div className={listHeaderStyle}>
          <div>Commits list</div>
        </div>
        <EmptyState note="Your commits will show up here" />
      </div>
    );
  }

  const isFirstSearch = useRef<boolean>(true);

  const [page, setPage] = useState<number>(0);
  const [filter, setFilter] = useState('');

  const renderContent = () => {
    const { commits, isFetching, hasMore, error } = useCommits({
      user: githubInfo,
      pageSize: PAGE_SIZE,
      pageNumber: page,
    });

    /**
     * State when an error occurred or we din't get data from API
     * We could have a specific error state
     */
    if (error || (commits.length === 0 && !isFirstSearch)) {
      return <EmptyState note="We couldn’t get the commits for this repository" />;
    }

    // Loading state for the first search
    if (isFetching && commits.length === 0 && isFirstSearch) {
      isFirstSearch.current = false;
      return <EmptyState isLoading />;
    }

    return (
      <Table
        data={commits}
        hasMore={hasMore}
        loading={isFetching}
        filterQuery={filter}
        fetchData={handleFetchData}
      />
    );
  };

  const handleFetchData = () => {
    setPage((currentPage) => currentPage + 1);
  };

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
      {renderContent()}
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
