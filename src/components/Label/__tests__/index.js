// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Label from '../index';
import type { Props } from '../index';

describe('<Label />', () => {
  it('expect to render the component correctly with "public"', () => {
    const props: Props = {
      type: 'public',
    };

    const component = shallow(
      <Label
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly with "private"', () => {
    const props: Props = {
      type: 'private',
    };

    const component = shallow(
      <Label
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
