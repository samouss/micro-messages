// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import './App.css';

const List = () => (
  <div>list messages</div>
);

const Message = () => (
  <div>view message</div>
);

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <List />

        <Route path="/:messageId" component={Message} />
      </div>
    </Router>
  </Provider>
);

export default App;
