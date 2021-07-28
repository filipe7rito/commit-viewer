/* eslint-disable import/extensions */
import { render, waitFor } from '@testing-library/react';
import 'intersection-observer';
import React from 'react';
import { CommitsList } from './CommitsList';
import { GithubInfo } from '../../types/githubInfo';

describe('Commits', () => {
  const githubInfo: GithubInfo = {
    username: 'amazing',
    repository: 'amazing-repo',
  };

  it('Render commits list list with results', async () => {
    const { getByTestId } = renderTransactions();

    await waitFor(() => {
      // First row result in table
      expect(getByTestId('table-row-0')).toBeInTheDocument();
    });
  });

  function renderTransactions() {
    return render(<CommitsList githubInfo={githubInfo} />);
  }
});
