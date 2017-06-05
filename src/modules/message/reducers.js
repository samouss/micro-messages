// @flow

import { combineReducers } from 'redux';
import * as ACTION_TYPES from './actionTypes';
import type { State, Action } from 'store/types';
import type { MessageId, MessageByIdState, MessageIdsState } from './types';

const messageByIdInitialState: MessageByIdState = {};
const messageById = (state = messageByIdInitialState, action: Action) => {
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

const messageIdsInitialState: MessageIdsState = [];
const messageIds = (state = messageIdsInitialState, action: Action) => {
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
  messageById,
  messageIds,
});

const getMessageById = (state: State, id: MessageId) => state.messageById[id];
const getMessageIds = (state: State) => state.messageIds;

export const getMessages = (state: State) => {
  return getMessageIds(state).map(id => getMessageById(state, id));
};
