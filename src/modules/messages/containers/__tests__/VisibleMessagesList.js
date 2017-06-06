// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockMessage } from 'test/messages';
import { VisibleMessagesList } from '../VisibleMessagesList';

import type { Props } from '../VisibleMessagesList';

describe('<VisibleMessagesList />', () => {
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
