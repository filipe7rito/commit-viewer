import axios from 'axios';
import { axiosRequestConfig } from '../apiConfig';
import { Commit } from '../../types/commit';

export async function fetch({
  username,
  repository,
  page,
  pageSize,
}: {
  username: string;
  repository: string;
  page?: number;
  pageSize?: number;
}): Promise<Commit[]> {
  const response = await axios.get(`/repos/${username}/${repository}/commits`, {
    ...axiosRequestConfig,
    params: {
      per_page: pageSize,
      page,
    },
  });

  const commits: Commit[] = response.data.map((record: any) => {
    return {
      sha: record.sha,
      message: record.commit.message,
      author: {
        id: record.author ? record.author.id : record.committer.id,
        login: record.author ? record.author.login : record.committer.login,
        name: record.commit.author.name,
        avatarUrl: record.author ? record.author.avatar_url : record.committer.avatar_url,
        date: record.commit.author.date,
      },
      parents: record.parents,
    };
  });

  return commits;
}
