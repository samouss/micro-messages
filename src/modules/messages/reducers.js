// @flow

import { combineReducers } from 'redux';
import * as ACTION_TYPES from './actionTypes';
import type { State, Action } from 'store/types';
import type { MessageId, ByIdState, IdsState } from './types';

const byIdInitialState: ByIdState = {};
const byId = (state = byIdInitialState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_MESSAGES_SUCCESS: {
      return {
        ...state,
        ...action.messages.reduce((acc, message) => ({
          ...acc,
          [message.id]: message,
        }), {}),
      };
    }

    default: {
      return state;
    }
  }
};

const idsInitialState: IdsState = [];
const ids = (state = idsInitialState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_MESSAGES_SUCCESS: {
      return state.concat(action.messages.map(message => message.id));
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  byId,
  ids,
});

const getState = (state: State) => state.messages;
const getMessageIds = (state: State) => getState(state).ids;

export const getMessage = (state: State, id: MessageId) => {
  return getState(state).byId[id];
};

export const getMessages = (state: State) => {
  return getMessageIds(state).map(id => getMessage(state, id));
};
