// @flow

import * as utils from '../utils';

jest.useFakeTimers();

describe('utils', () => {
  describe('timeoutify', () => {
    it('call the callback after default delay', () => {
      expect.assertions(3);

      const fn = jest.fn();
      const promise = utils.timeoutify().then(fn);

      expect(fn).not.toHaveBeenCalled();

      jest.runOnlyPendingTimers();

      return promise.then(() => {
        expect(fn).toHaveBeenCalled();
        expect(setTimeout.mock.calls[0][1]).toBe(1500);
      });
    });

    it('call the callback after 500ms delay', () => {
      expect.assertions(3);

      const fn = jest.fn();
      const delay = 500;
      const promise = utils.timeoutify(delay).then(fn);

      expect(fn).not.toHaveBeenCalled();

      jest.runOnlyPendingTimers();

      return promise.then(() => {
        expect(fn).toHaveBeenCalled();
        expect(setTimeout.mock.calls[1][1]).toBe(500);
      });
    });
  });

  describe('createReducer', () => {
    it('expect to return initial state if previous state is not defined', () => {
      const initialState = 0;
      const previousState = undefined;

      const reducer = utils.createReducer(initialState, {
        INCREMENT: state => state,
      });

      const expectation = 0;
      const actual = reducer(previousState, {
        type: 'DECREMENT',
      });

      expect(actual).toEqual(expectation);
    });

    it('expect to return previous state if no action match', () => {
      const initialState = 0;
      const previousState = 5;

      const reducer = utils.createReducer(initialState, {
        INCREMENT: state => state + 1,
      });

      const expectation = 5;
      const actual = reducer(previousState, {
        type: 'DECREMENT',
      });

      expect(actual).toEqual(expectation);
    });

    it('expect to return the new computed state if action match from previous state', () => {
      const initialState = 0;
      const previousState = undefined;

      const reducer = utils.createReducer(initialState, {
        INCREMENT: (state, action) => state + action.by,
      });

      const expectation = 2;
      const actual = reducer(previousState, {
        type: 'INCREMENT',
        by: 2,
      });

      expect(actual).toEqual(expectation);
    });

    it('expect to return the new computed state if action match from previous state', () => {
      const initialState = 0;
      const previousState = 5;

      const reducer = utils.createReducer(initialState, {
        INCREMENT: (state, action) => state + action.by,
      });

      const expectation = 7;
      const actual = reducer(previousState, {
        type: 'INCREMENT',
        by: 2,
      });

      expect(actual).toEqual(expectation);
    });
  });
});
