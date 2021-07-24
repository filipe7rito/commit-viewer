import { css } from 'emotion';
import React, { useState } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Menu } from './components/menu/Menu';
import { CommitsList } from './components/commits-list';

export type GithubInfo = {
  user: string;
  repository: string;
};

function App() {
  const [githubInfo, setGithubInfo] = useState<GithubInfo>();

  const handleSearch = (info: GithubInfo) => {
    setGithubInfo(info);
  };

  return (
    <div className={wrapperStyle}>
      <Header onSearch={handleSearch} />
      <main className={containerStyle}>
        <aside>
          <Menu />
        </aside>
        <div className={mainContainerWrapperStyle}>
          <div className={commitsContainerStyle}>
            <CommitsList githubInfo={githubInfo} />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;

const wrapperStyle = css`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const containerStyle = css`
  display: flex;
  flex-grow: 1;
`;

const mainContainerWrapperStyle = css`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const commitsContainerStyle = css`
  height: 100%;
  margin: 0px 0px 16px;
  min-width: 0px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;
