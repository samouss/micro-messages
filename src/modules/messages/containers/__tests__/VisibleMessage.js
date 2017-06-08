// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockMessage } from 'test/messages';
import { createMockStore } from 'test/store';
import { getMessage } from '../../reducers';
import Connect, { VisibleMessage } from '../VisibleMessage';

import type { Props } from '../VisibleMessage';

jest.mock('../../reducers', () => ({
  getMessage: jest.fn(state => state),
}));

describe('<VisibleMessage />', () => {
  const createContext = state => ({
    store: createMockStore(state),
  });

  const defaultProps = {
    message: createMockMessage('ID1234'),
  };

  it('expect to render the component correctly with message', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <VisibleMessage
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly without message', () => {
    const props: Props = {
      ...defaultProps,
      message: undefined,
    };

    const component = shallow(
      <VisibleMessage
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('expect to call getMessage', () => {
      const state = { messages: [] };
      const context = createContext(state);

      const messageId = 'ID1234';
      const props = {
        match: {
          params: { messageId },
        },
      };

      shallow(
        <Connect
          {...props}
        />,
        { context },
      );

      expect(getMessage).toHaveBeenCalledWith(state, messageId);
    });
  });
});
