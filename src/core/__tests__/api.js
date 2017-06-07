// @flow

import { createMockMessage } from 'test/messages';
import * as api from '../api';

jest.mock('../../../db.json', () => [
  { id: '1234' },
  { id: '5678' },
]);

describe('api', () => {
  describe('fetchMessages', () => {
    it('expect to return an array', () => {
      expect.assertions(1);

      const expectation = [
        { id: '1234' },
        { id: '5678' },
      ];

      return api.fetchMessages().then(res => {
        expect(res).toEqual(expectation);
      });
    });
  });

  describe('postMessage', () => {
    it('expect to return the given message', () => {
      expect.assertions(1);

      const message = createMockMessage('ID1234');
      const expectation = createMockMessage('ID1234');

      return api.postMessage(message).then(res => {
        expect(res).toEqual(expectation);
      });
    });
  });
});
