// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Circle from '../index';

describe('<Circle />', () => {
  const defaultProps = {
    onClick: () => {},
  };

  it('expect to render the component correctly', () => {
    const props = {
      ...defaultProps,
    };

    const component = shallow(
      <Circle
        {...props}
      >
        <span>some content</span>
      </Circle>,
    );

    expect(component).toMatchSnapshot();
  });
});
