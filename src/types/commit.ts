export type Commit = {
  sha: string;
  author: Author;
  message: string;
  parents: Parent[];
};

export type Author = {
  id: string;
  login: string;
  name: string;
  date: string;
  avatarUrl: string;
};

export type Parent = {
  sha: string;
  url: string;
  htmlUrl: string;
};
