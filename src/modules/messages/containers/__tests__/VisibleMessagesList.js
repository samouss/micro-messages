// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockMessage } from 'test/messages';
import { createMockStore } from 'test/store';
import { getMessages } from '../../reducers';
import Connect, { VisibleMessagesList } from '../VisibleMessagesList';

import type { Props } from '../VisibleMessagesList';

jest.mock('../../reducers', () => ({
  getMessages: jest.fn(state => state),
}));

jest.mock('../../actions', () => ({
  fetchMessages: jest.fn(() => ({
    type: 'FETCH_MESSAGES',
  })),
}));

describe('<VisibleMessagesList />', () => {
  const createContext = state => ({
    store: createMockStore(state),
  });

  const defaultProps = {
    messages: [
      createMockMessage('ID1234'),
      createMockMessage('ID5678'),
      createMockMessage('ID9101'),
    ],
    fetchMessages: () => Promise.resolve(),
  };

  it('expect to render the component correctly with Loader on first render', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <VisibleMessagesList
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly with MessagesList', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <VisibleMessagesList
        {...props}
      />,
    );

    // $FlowFixMe
    component.setState({ isLoading: false });

    expect(component).toMatchSnapshot();
  });

  describe('fetchMessages', () => {
    it('expect to call fetchMessages on didMount', () => {
      const props: Props = {
        ...defaultProps,
        fetchMessages: jest.fn(() => Promise.resolve()),
      };

      const component = shallow(
        <VisibleMessagesList
          {...props}
        />,
      );

      // $FlowFixMe
      component.instance().componentDidMount();

      expect(props.fetchMessages).toHaveBeenCalled();
    });

    it('expect to call fetchMessages and setState', () => {
      expect.assertions(3);

      const props: Props = {
        ...defaultProps,
        fetchMessages: jest.fn(() => Promise.resolve()),
      };

      const expectation = {
        before: { isLoading: true },
        after: { isLoading: false },
      };

      const component = shallow(
        <VisibleMessagesList
          {...props}
        />,
      );

      // $FlowFixMe
      expect(component.state()).toEqual(expectation.before);

      // $FlowFixMe
      return component.instance().fetchMessages().then(() => {
        expect(props.fetchMessages).toHaveBeenCalled();
        // $FlowFixMe
        expect(component.state()).toEqual(expectation.after);
      });
    });
  });

  describe('mapStateToProps', () => {
    it('expect to call getMessages', () => {
      const state = { messages: [] };
      const context = createContext(state);

      shallow(
        <Connect />,
        { context },
      );

      expect(getMessages).toHaveBeenCalledWith(state);
    });
  });

  describe('mapDispatchToProps', () => {
    it('expect to bind fetchMessages', () => {
      const context = createContext();

      const component = shallow(
        <Connect />,
        { context },
      );

      // $FlowFixMe
      component.props().fetchMessages();

      expect(context.store.dispatch).toHaveBeenCalledWith({
        type: 'FETCH_MESSAGES',
      });
    });
  });
});
