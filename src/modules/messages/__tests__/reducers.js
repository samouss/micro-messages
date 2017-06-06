// @flow

import { createMockMessage } from 'test/messages';
import reducers, * as selectors from '../reducers';

describe('message', () => {
  describe('[reducers]', () => {
    const initialState = {
      byId: {},
      ids: [],
    };

    it('expect to return the initial state', () => {
      const previousState = undefined;
      const action = { type: 'NOT_MATCH' };

      const expectation = initialState;
      const actual = reducers(previousState, action);

      expect(actual).toEqual(expectation);
    });

    describe('FETCH_MESSAGES_SUCCESS', () => {
      const type = 'FETCH_MESSAGES_SUCCESS';

      it('expect to return next state from empty state', () => {
        const messages = [
          createMockMessage('ID123'),
          createMockMessage('ID456'),
        ];

        const previousState = undefined;
        const action = { type, messages };

        const expectation = {
          ...initialState,
          byId: {
            ID123: createMockMessage('ID123'),
            ID456: createMockMessage('ID456'),
          },
          ids: [
            'ID123',
            'ID456',
          ],
        };

        const actual = reducers(previousState, action);

        expect(actual).toEqual(expectation);
      });

      it('expect to return next state from non empty state', () => {
        const messages = [
          createMockMessage('ID789'),
          createMockMessage('ID101'),
        ];

        const previousState = {
          ...initialState,
          byId: {
            ID123: createMockMessage('ID123'),
            ID456: createMockMessage('ID456'),
          },
          ids: [
            'ID123',
            'ID456',
          ],
        };

        const action = { type, messages };

        const expectation = {
          ...initialState,
          byId: {
            ID123: createMockMessage('ID123'),
            ID456: createMockMessage('ID456'),
            ID789: createMockMessage('ID789'),
            ID101: createMockMessage('ID101'),
          },
          ids: [
            'ID123',
            'ID456',
            'ID789',
            'ID101',
          ],
        };

        const actual = reducers(previousState, action);

        expect(actual).toEqual(expectation);
      });
    });
  });

  describe('[selectors]', () => {
    describe('getMessages', () => {
      it('expect to return an array of messages', () => {
        const state = {
          messages: {
            byId: {
              ID123: createMockMessage('ID123'),
              ID456: createMockMessage('ID456'),
            },
            ids: [
              'ID123',
              'ID456',
            ],
          },
        };

        const expectation = [
          createMockMessage('ID123'),
          createMockMessage('ID456'),
        ];

        const actual = selectors.getMessages(state);

        expect(actual).toEqual(expectation);
      });
    });
  });
});
