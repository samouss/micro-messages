// @flow

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
});
