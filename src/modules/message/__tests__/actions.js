// @flow

import { createMockMessage } from 'test/message';
import { fetchMessages } from 'core/api';
import * as ACTION_TYPES from '../actionTypes';
import * as actions from '../actions';

jest.mock('core/api', () => ({
  fetchMessages: jest.fn(),
}));

describe('message - actions', () => {
  describe('fetchMessages', () => {
    it('expect to successfully fetch messages', () => {
      expect.assertions(1);

      const messages = [
        createMockMessage('1234'),
        createMockMessage('5678'),
      ];

      const dispatch = jest.fn();

      // $FlowFixMe
      fetchMessages.mockImplementationOnce(() => Promise.resolve(messages));

      const expectation = [
        [{ type: ACTION_TYPES.FETCH_MESSAGES_REQUEST }],
        [{ type: ACTION_TYPES.FETCH_MESSAGES_SUCCESS, messages }],
      ];


      return actions.fetchMessages()(dispatch).then(() => {
        expect(dispatch.mock.calls).toEqual(expectation);
      });
    });

    it('expect to fail to fetch messages', () => {
      expect.assertions(1);

      const dispatch = jest.fn();

      // $FlowFixMe
      fetchMessages.mockImplementationOnce(() => Promise.reject());

      const expectation = [
        [{ type: ACTION_TYPES.FETCH_MESSAGES_REQUEST }],
        [{ type: ACTION_TYPES.FETCH_MESSAGES_FAILURE }],
      ];

      return actions.fetchMessages()(dispatch).then(() => {
        expect(dispatch.mock.calls).toEqual(expectation);
      });
    });
  });
});
