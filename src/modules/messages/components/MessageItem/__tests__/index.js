// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockMessage } from 'test/message';
import MessageItem from '../index';

import type { Props } from '../index';

describe('<MessageItem />', () => {
  it('expect to render the component correctly', () => {
    const props: Props = {
      message: createMockMessage('ID1234'),
    };

    const component = shallow(
      <MessageItem
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
