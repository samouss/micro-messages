// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { MessageState, MessageAction } from '../modules/messages/types';

export type State =
  & MessageState;

export type Action =
  | MessageAction;

export type Store = ReduxStore<State, Action>;

export type GetState = () => State;

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Dispatch =
  & ReduxDispatch<Action>
  & Thunk<Action>;
