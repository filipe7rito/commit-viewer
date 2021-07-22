import { css } from 'emotion';
import React from 'react';
import { Header } from './components/header';

function App() {
  return (
    <div className={wrapper}>
      <Header />
      <main className={container} />
      <Footer />
    </div>
  );
}

function Footer() {
  return <footer className={footerStyle} />;
}

export default App;

const wrapper = css`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const container = css`
  padding: 40px 40px 0px 40px;
  height: 100%;
  flex: 1;
`;

const footerStyle = css`
  flex-shrink: 0;
  background-color: #ebebeb;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
