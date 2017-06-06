// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockMessage } from 'test/messages';
import MessageViewer from '../index';

import type { Props } from '../index';

describe('<MessageViewer />', () => {
  it('expect to render the component correctly', () => {
    const props: Props = {
      message: createMockMessage('ID1234'),
    };

    const component = shallow(
      <MessageViewer
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
