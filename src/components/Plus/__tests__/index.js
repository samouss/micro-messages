// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Plus from '../index';

import type { Props } from '../index';

describe('<Plus />', () => {
  const defaultProps: Props = {};

  it('expect to render the component correctly', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <Plus
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component with custom className', () => {
    const props: Props = {
      ...defaultProps,
      customClassName: 'someClass',
    };

    const component = shallow(
      <Plus
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
