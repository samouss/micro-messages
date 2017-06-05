// @flow

import type { Message, MessageId, Visibility } from 'modules/messages/types';

export const createMockMessage = (id: MessageId, visibility: Visibility = 'private'): Message => ({
  id,
  visibility,
  date: 'DATE',
  body: 'BODY',
});
