// @flow

import type { Message, MessageInput, MessageId, Visibility } from 'modules/messages/types';

export const createMockMessage = (id: MessageId, visibility: Visibility = 'private'): Message => ({
  id,
  visibility,
  date: 'SOME_DATE',
  body: 'BODY',
});

export const createMockMessageInput = (visibility: Visibility = 'private'): MessageInput => ({
  visibility,
  body: 'BODY',
});
