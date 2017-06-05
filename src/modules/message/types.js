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

export type MessageByIdState = { [id: MessageId]: Message };
export type MessageIdsState = Array<MessageId>;

export type MessageState = {
  +messageById: MessageByIdState,
  +messageIds: MessageIdsState,
};

export type MessageAction =
  | { type: 'FETCH_MESSAGES_REQUEST' }
  | { type: 'FETCH_MESSAGES_SUCCESS', messages: Array<Message> }
  | { type: 'FETCH_MESSAGES_FAILURE' };
