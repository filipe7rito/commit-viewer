import * as React from 'react';
import { GithubInfo } from '../../App';
import { useCommits } from '../../state';

export function CommitsList({ githubInfo }: { githubInfo: GithubInfo | undefined }) {
  if (!githubInfo) {
    return <></>;
  }

  const { commits, isFetching } = useCommits(githubInfo);

  if (isFetching) {
    return <div>LOADING....</div>;
  }

  return (
    <div>
      <h1>commits list</h1> {isFetching && <div>LOADING....</div>}
      {!isFetching && (
        <ul>
          {commits.map((commit) => (
            <li key={commit.sha}>{commit.sha}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
