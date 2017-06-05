// @flow

export type MessageId = string;
export type MessageBody = string;

export type Visibility = 'public' | 'private';

export type Message = {
  +id: MessageId,
  +date: string,
  +body: MessageBody,
  +visibility: Visibility,
};

export type MessageState = {
  +messageById: { [id: MessageId]: Message },
  +messageIds: Array<MessageId>,
};

export type MessageAction =
  | { type: 'FETCH_MESSAGES' }
  | { type: 'FETCH_MESSAGES_SUCCESS', messages: Array<Message> }
  | { type: 'FETCH_MESSAGES_FAILURE' };
