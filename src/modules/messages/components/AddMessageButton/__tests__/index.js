// @flow

import React from 'react';
import { shallow } from 'enzyme';
import AddMessageButton from '../index';

describe('<AddMessageButton />', () => {
  const defaultProps = {
    onClick: () => {},
  };

  it('expect to render the component correctly', () => {
    const props = {
      ...defaultProps,
    };

    const component = shallow(
      <AddMessageButton
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
