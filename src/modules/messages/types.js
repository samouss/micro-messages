// @flow

export type MessageId = string;
export type MessageBody = string;

export type Visibility = 'public' | 'private';

export type VisibilityFilter = Visibility | 'all';

export type Message = {
  id: MessageId,
  date: string,
  body: MessageBody,
  visibility: Visibility,
};

export type MessageInput = {
  body: MessageBody,
  visibility: Visibility,
};

export type ByIdState = { [id: MessageId]: Message };
export type IdsState = Array<MessageId>;

export type MessageState = {
  byId: ByIdState,
  ids: IdsState,
};

export type FetchMessagesRequestAction = { type: 'FETCH_MESSAGES_REQUEST' };
export type FetchMessagesSuccessAction = { type: 'FETCH_MESSAGES_SUCCESS', messages: Array<Message> };
export type FetchMessagesFailureAction = { type: 'FETCH_MESSAGES_FAILURE' };

export type PostMessageRequestAction = { type: 'POST_MESSAGE_REQUEST', message: Message };
export type PostMessageSuccessAction = { type: 'POST_MESSAGE_SUCCESS', message: Message };
export type PostMessageFailureAction = { type: 'POST_MESSAGE_FAILURE' };

export type MessageAction =
  | FetchMessagesRequestAction
  | FetchMessagesSuccessAction
  | FetchMessagesFailureAction

  | PostMessageRequestAction
  | PostMessageSuccessAction
  | PostMessageFailureAction;
