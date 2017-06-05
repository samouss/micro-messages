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

export type ByIdState = { [id: MessageId]: Message };
export type IdsState = Array<MessageId>;

export type MessageState = {
  +messages: {
    +byId: ByIdState,
    +ids: IdsState,
  },
};

export type MessageAction =
  | { type: 'FETCH_MESSAGES_REQUEST' }
  | { type: 'FETCH_MESSAGES_SUCCESS', messages: Array<Message> }
  | { type: 'FETCH_MESSAGES_FAILURE' };
