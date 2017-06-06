// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockMessage } from 'test/messages';
import MessagesList from '../index';

import type { Props } from '../index';

describe('<MessagesList />', () => {
  it('expect to render the component correctly', () => {
    const props: Props = {
      messages: [
        createMockMessage('ID1234'),
        createMockMessage('ID5678'),
        createMockMessage('ID9101'),
      ],
    };

    const component = shallow(
      <MessagesList
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
