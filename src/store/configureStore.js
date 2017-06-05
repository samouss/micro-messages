// @flow

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

import type { Store } from './types';

const configureStore = (): Store => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
  );

  return store;
};

export default configureStore;
