// @flow

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

import type { Store } from './types';

const configureStore = (): Store => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    // @NOTE: use require avoid to turn configureStore into
    // a Promise (dynamic import())
    const { createLogger } = require('redux-logger');

    middlewares.push(createLogger());
  }

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
  );

  return store;
};

export default configureStore;
