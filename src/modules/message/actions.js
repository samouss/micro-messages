// @flow

import { fetchMessages as fetchMessagesFromApi } from 'core/api';
import type { Dispatch } from 'store/types';
import type { Message, MessageAction } from './types';

const fetchMessagesRequest = (): MessageAction => ({
  type: 'FETCH_MESSAGES_REQUEST',
});

const fetchMessagesSuccess = (messages: Array<Message>): MessageAction => ({
  type: 'FETCH_MESSAGES_SUCCESS',
  messages,
});

const fetchMessagesFailure = (): MessageAction => ({
  type: 'FETCH_MESSAGES_FAILURE',
});

export const fetchMessages = () => (dispatch: Dispatch) => {
  dispatch(fetchMessagesRequest());

  return fetchMessagesFromApi().then(res => {
    dispatch(fetchMessagesSuccess(res));
  }).catch(() => {
    dispatch(fetchMessagesFailure());
  });
};
