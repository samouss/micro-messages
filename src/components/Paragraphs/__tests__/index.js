// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Paragraphs from '../index';

import type { Props } from '../index';

describe('<Paragraphs />', () => {
  const defaultProps: Props = {
    text: 'Text from Lorem',
  };

  it('expect to render the component correctly', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <Paragraphs
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
