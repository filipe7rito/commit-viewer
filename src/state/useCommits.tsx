import { useEffect, useState } from 'react';
import api from '../api';
import { GithubInfo } from '../App';
import { Commit } from '../types';

function useCommits(githubInfo: GithubInfo, nextPage?: string) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    setIsFetching(true);

    const { user, repository } = githubInfo;

    try {
      const data = await api.commits.fetch({ user, repository });

      setCommits(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [githubInfo, nextPage]);

  return { commits, isFetching, error };
}

export { useCommits };
