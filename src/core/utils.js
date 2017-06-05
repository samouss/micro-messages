// @flow

/**
 * functions
 */

export const timeoutify = (delay: number = 1500): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * reducers
 */

type Action = { type: string };
type Reducer<S, A> = (S, A) => S;
type Reducers<S, A> = {
  [key: string]: Reducer<S, A>,
};

export const createReducer = <S, A: Action>(initialState: S, handlers: Reducers<S, A>): Reducer<S, A> => {
  return (state: S = initialState, action: A) => {
    if (!handlers[action.type]) {
      return state;
    }

    return handlers[action.type](state, action);
  };
};
