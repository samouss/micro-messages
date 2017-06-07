// @flow

import { v4 } from 'uuid';
import moment from 'moment';
import * as api from 'core/api';
import * as ACTION_TYPES from './actionTypes';

import type { Dispatch } from 'store/types';
import type {
  Message,
  MessageInput,
  FetchMessagesRequestAction,
  FetchMessagesSuccessAction,
  FetchMessagesFailureAction,
  PostMessageRequestAction,
  PostMessageSuccessAction,
  PostMessageFailureAction,
} from './types';

const fetchMessagesRequest = (): FetchMessagesRequestAction => ({
  type: ACTION_TYPES.FETCH_MESSAGES_REQUEST,
});

const fetchMessagesSuccess = (messages: Array<Message>): FetchMessagesSuccessAction => ({
  type: ACTION_TYPES.FETCH_MESSAGES_SUCCESS,
  messages,
});

const fetchMessagesFailure = (): FetchMessagesFailureAction => ({
  type: ACTION_TYPES.FETCH_MESSAGES_FAILURE,
});

export const fetchMessages = () => (dispatch: Dispatch) => {
  dispatch(fetchMessagesRequest());

  return api.fetchMessages().then(res => {
    dispatch(fetchMessagesSuccess(res));
  }).catch(() => {
    dispatch(fetchMessagesFailure());
  });
};

const postMessageRequest = (input: MessageInput): PostMessageRequestAction => ({
  type: ACTION_TYPES.POST_MESSAGE_REQUEST,
  message: {
    ...input,
    id: v4(),
    date: moment().toISOString(),
  },
});

const postMessageSuccess = (message: Message): PostMessageSuccessAction => ({
  type: ACTION_TYPES.POST_MESSAGE_SUCCESS,
  message,
});

const postMessageFailure = (): PostMessageFailureAction => ({
  type: ACTION_TYPES.POST_MESSAGE_FAILURE,
});

export const postMessage = (input: MessageInput) => (dispatch: Dispatch) => {
  const action = postMessageRequest(input);

  dispatch(action);

  return api.postMessage(action.message).then(res => {
    dispatch(postMessageSuccess(res));
  }).catch(() => {
    dispatch(postMessageFailure());
  });
};
