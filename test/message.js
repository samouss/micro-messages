// @flow

import type { Message, MessageId, Visibility } from 'modules/message/types';

export const createMockMessage = (id: MessageId, visibility: Visibility = 'private'): Message => ({
  id,
  visibility,
  date: 'DATE',
  body: 'BODY',
});
