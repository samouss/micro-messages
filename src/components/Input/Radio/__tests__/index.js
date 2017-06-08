// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Radio from '../index';

describe('<Radio />', () => {
  const defaultProps = {
    id: 'input',
    value: 'visible',
    onChange: () => {},
  };

  it('expect to render the component correctly', () => {
    const props = {
      ...defaultProps,
    };

    const component = shallow(
      <Radio
        {...props}
      >
        <span>some content</span>
      </Radio>,
    );

    expect(component).toMatchSnapshot();
  });
});
