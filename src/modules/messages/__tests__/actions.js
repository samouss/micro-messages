// @flow

import { createMockMessage, createMockMessageInput } from 'test/messages';
import * as api from 'core/api';
import * as ACTION_TYPES from '../actionTypes';
import * as actions from '../actions';

jest.mock('uuid', () => ({
  v4: () => 'SOME_RANDOM_ID',
}));

jest.mock('core/api', () => ({
  fetchMessages: jest.fn(),
  postMessage: jest.fn(),
}));

jest.mock('moment', () => jest.fn(() => ({
  toISOString: () => 'SOME_DATE',
})));

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
      api.fetchMessages.mockImplementationOnce(() => Promise.resolve(messages));

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
      api.fetchMessages.mockImplementationOnce(() => Promise.reject());

      const expectation = [
        [{ type: ACTION_TYPES.FETCH_MESSAGES_REQUEST }],
        [{ type: ACTION_TYPES.FETCH_MESSAGES_FAILURE }],
      ];

      return actions.fetchMessages()(dispatch).then(() => {
        expect(dispatch.mock.calls).toEqual(expectation);
      });
    });
  });

  describe('postMessage', () => {
    it('expect to successfully post a new message', () => {
      expect.assertions(1);

      const dispatch = jest.fn();
      const input = createMockMessageInput();
      const message = createMockMessage('SOME_RANDOM_ID');

      // $FlowFixMe
      api.postMessage.mockImplementationOnce(() => Promise.resolve(message));


      const expectation = [
        [{ type: ACTION_TYPES.POST_MESSAGE_REQUEST, message }],
        [{ type: ACTION_TYPES.POST_MESSAGE_SUCCESS, message }],
      ];


      return actions.postMessage(input)(dispatch).then(() => {
        expect(dispatch.mock.calls).toEqual(expectation);
      });
    });

    it('expect to fail to post a new message', () => {
      expect.assertions(1);

      const dispatch = jest.fn();
      const input = createMockMessageInput();
      const message = createMockMessage('SOME_RANDOM_ID');

      // $FlowFixMe
      api.postMessage.mockImplementationOnce(() => Promise.reject());

      const expectation = [
        [{ type: ACTION_TYPES.POST_MESSAGE_REQUEST, message }],
        [{ type: ACTION_TYPES.POST_MESSAGE_FAILURE }],
      ];

      return actions.postMessage(input)(dispatch).then(() => {
        expect(dispatch.mock.calls).toEqual(expectation);
      });
    });
  });

  describe('changeVisibilityFilter', () => {
    it('expect to return a visibility filter action', () => {
      const filter = 'public';

      const expectation = {
        type: ACTION_TYPES.CHANGE_VISIBILITY_FILTER,
        filter,
      };

      const actual = actions.changeVisibilityFilter(filter);

      expect(actual).toEqual(expectation);
    });
  });
});
