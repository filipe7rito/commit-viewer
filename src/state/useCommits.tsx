import { useEffect, useState } from 'react';
import api from '../api';
import { User } from '../types/user';
import { Commit } from '../types/commit';

function useCommits({
  user,
  pageSize,
  pageNumber,
}: {
  user: User;
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

      const newCommits = [...commits, ...data];

      setCommits(newCommits);
      setHasMore(data.length > 0);
    } catch (e) {
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
