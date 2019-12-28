import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabPanel from './components/tabPanel/tabPanel';
import { tabs } from './config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRedo, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faRedo, faTimesCircle);

function App() {
  return (
    <div className="container">
      <TabPanel tabs={tabs} activeTabId={2}></TabPanel>
    </div>
  );
}

export default App;
