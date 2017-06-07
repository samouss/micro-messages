// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Submit from '../index';

describe('<Submit />', () => {
  const defaultProps = {
    onClick: () => {},
  };

  it('expect to render the component correctly', () => {
    const props = {
      ...defaultProps,
    };

    const component = shallow(
      <Submit
        {...props}
      >
        <span>some content</span>
      </Submit>,
    );

    expect(component).toMatchSnapshot();
  });
});
