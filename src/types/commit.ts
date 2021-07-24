export type Commit = {
  sha: string;
  author: Author;
  message: string;
};

export type Author = {
  id: string;
  login: string;
  name: string;
  email: string;
  date: string;
  avatarUrl: string;
};
