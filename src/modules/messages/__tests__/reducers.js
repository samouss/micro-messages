// @flow

import { createMockMessage } from 'test/messages';
import reducers, * as selectors from '../reducers';

import type { State } from 'store/types';
import type { MessageState, MessageAction } from '../types';

describe('message', () => {
  describe('[reducers]', () => {
    const initialState: MessageState = {
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
        const action: MessageAction = { type, messages };

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

        const previousState: MessageState = {
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

        const action: MessageAction = { type, messages };

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

    describe('POST_MESSAGE_SUCCESS', () => {
      const type = 'POST_MESSAGE_SUCCESS';

      it('expect to return next state from empty state', () => {
        const message = createMockMessage('ID123');

        const previousState = undefined;
        const action: MessageAction = { type, message };

        const expectation = {
          ...initialState,
          byId: {
            ID123: createMockMessage('ID123'),
          },
          ids: [
            'ID123',
          ],
        };

        const actual = reducers(previousState, action);

        expect(actual).toEqual(expectation);
      });

      it('expect to return next state from non empty state', () => {
        const message = createMockMessage('ID789');

        const previousState: MessageState = {
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

        const action: MessageAction = { type, message };

        const expectation = {
          ...initialState,
          byId: {
            ID123: createMockMessage('ID123'),
            ID456: createMockMessage('ID456'),
            ID789: createMockMessage('ID789'),
          },
          ids: [
            'ID789',
            'ID123',
            'ID456',
          ],
        };

        const actual = reducers(previousState, action);

        expect(actual).toEqual(expectation);
      });
    });
  });

  describe('[selectors]', () => {
    describe('getMessage', () => {
      it('expect to return a message', () => {
        const id = 'ID123';

        const state = {
          messages: {
            byId: {
              [id]: createMockMessage(id),
            },
            ids: [
              id,
            ],
          },
        };

        const expectation = createMockMessage(id);
        const actual = selectors.getMessage(state, id);

        expect(actual).toEqual(expectation);
      });

      it('expect to return a undefined', () => {
        const id = 'ID123';

        const state = {
          messages: {
            byId: {},
            ids: [],
          },
        };

        const actual = selectors.getMessage(state, id);

        expect(actual).toBeUndefined();
      });
    });

    describe('getMessages', () => {
      it('expect to return an array of messages', () => {
        const state: State = {
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

      it('expect to return an empty array', () => {
        const state: State = {
          messages: {
            byId: {},
            ids: [],
          },
        };

        const expectation = [];
        const actual = selectors.getMessages(state);

        expect(actual).toEqual(expectation);
      });
    });
  });
});
