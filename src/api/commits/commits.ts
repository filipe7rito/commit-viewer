import axios from 'axios';
import { axiosRequestConfig } from '../apiConfig';
import { Commit } from '../../types/commit';

export async function fetch({ user, repository }: { user: string; repository: string }) {
  const response = await axios.get(`/repos/${user}/${repository}/commits`, {
    ...axiosRequestConfig,
  });

  const commits: Commit[] = response.data.map((record: any) => {
    return {
      sha: record.sha,
      author: {
        id: record.author.id,
        login: record.author.id,
        name: record.author.id,
        email: record.author.id,
        date: record.author.id,
        avatarUrl: record.author.id,
      },
      message: record.commit.message,
    };
  });

  return commits;
}
