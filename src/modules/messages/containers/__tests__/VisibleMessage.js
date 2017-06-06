// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockMessage } from 'test/messages';
import { VisibleMessage } from '../VisibleMessage';

import type { Props } from '../VisibleMessage';

describe('<VisibleMessage />', () => {
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
});
