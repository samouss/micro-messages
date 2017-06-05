// @flow

import { combineReducers } from 'redux';
import * as ACTION_TYPES from './actionTypes';
import type { Action } from 'store/types';
import type { MessageByIdState, MessageIdsState } from './types';

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
