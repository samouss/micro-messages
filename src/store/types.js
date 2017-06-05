// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type State = {};

export type Action = {};

export type Store = ReduxStore<State, Action>;

export type GetState = () => State;

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Dispatch =
  & ReduxDispatch<Action>
  & Thunk<Action>;
