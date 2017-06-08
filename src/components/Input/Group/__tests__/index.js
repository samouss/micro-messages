// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Group from '../index';

describe('<Group />', () => {
  const defaultProps = {
    className: 'customClassName',
  };

  it('expect to render the component correctly', () => {
    const props = {
      ...defaultProps,
    };

    const component = shallow(
      <Group
        {...props}
      >
        <span>some content</span>
      </Group>,
    );

    expect(component).toMatchSnapshot();
  });
});
