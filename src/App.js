// @flow

import 'moment/locale/fr';
import moment from 'moment';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from 'store/configureStore';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import VisibleMessagesList from 'modules/messages/containers/VisibleMessagesList';
import VisibleMessage from 'modules/messages/containers/VisibleMessage';
import AddMessage from 'modules/messages/containers/AddMessage';
import './App.css';

moment.locale('fr');

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Sidebar>
          <Route component={VisibleMessagesList} />
        </Sidebar>

        <AddMessage />

        <Route path="/:messageId" component={VisibleMessage} />
      </Layout>
    </Router>
  </Provider>
);

export default App;
