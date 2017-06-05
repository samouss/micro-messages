// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const List = () => (
  <div>list messages</div>
);

const Message = () => (
  <div>view message</div>
);

const App = () => (
  <Router>
    <div>
      <List />

      <Route path="/:messageId" component={Message} />
    </div>
  </Router>
);

export default App;
