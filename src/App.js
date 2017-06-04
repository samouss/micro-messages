// @flow

import React from 'react';
import './App.css';

type Props = {
  title: string,
};

const App = ({ title }: Props) => (
  <div>
    Hello from {title} !
  </div>
);

export default App;
