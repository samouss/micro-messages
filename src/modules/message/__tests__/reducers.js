// @flow

import { createMockMessage } from 'test/message';
import reducers from '../reducers';

describe('message', () => {
  describe('[reducers]', () => {
    const initialState = {
      messageById: {},
      messageIds: [],
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
          messageById: {
            ID123: createMockMessage('ID123'),
            ID456: createMockMessage('ID456'),
          },
          messageIds: [
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
          messageById: {
            ID123: createMockMessage('ID123'),
            ID456: createMockMessage('ID456'),
          },
          messageIds: [
            'ID123',
            'ID456',
          ],
        };

        const action = { type, messages };

        const expectation = {
          ...initialState,
          messageById: {
            ID123: createMockMessage('ID123'),
            ID456: createMockMessage('ID456'),
            ID789: createMockMessage('ID789'),
            ID101: createMockMessage('ID101'),
          },
          messageIds: [
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
});
