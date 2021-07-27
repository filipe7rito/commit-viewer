import { useEffect, useState } from 'react';
import api from '../api';
import { GithubInfo } from '../types/githubInfo';
import { Commit } from '../types/commit';

function useCommits({
  user,
  pageSize,
  pageNumber,
}: {
  user: GithubInfo;
  pageSize: number;
  pageNumber?: number;
}) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    setIsFetching(true);

    const { username, repository } = user;

    try {
      const data = await api.commits.fetch({ username, repository, pageSize, page: pageNumber });

      if (data.length > 0) {
        const newCommits = [...commits, ...data];

        setCommits(newCommits);

        return;
      }

      setHasMore(data.length > 0);
    } catch (e) {
      // We could manage errors how we want, let's just set  the incoming error
      setError(e);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user, pageNumber]);

  return { commits, isFetching, hasMore, error };
}

export { useCommits };
