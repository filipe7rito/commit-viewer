import React from 'react';
import Comparison from './components/comparison/comparison';

export const tabs = [
  {
    name: 'Analysis Status',
    id: 0,
    content: <h3>Data unavailable</h3>
  },
  {
    name: 'Logs',
    id: 1,
    content: <h3>Data unavailable</h3>
  },
  {
    name: 'Comparison',
    id: 2,
    content: <Comparison></Comparison>
  }
];
