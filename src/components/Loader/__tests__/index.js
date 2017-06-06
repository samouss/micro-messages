// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../index';

describe('<Loader />', () => {
  it('expect to render the component correctly', () => {
    const component = shallow(
      <Loader />,
    );

    expect(component).toMatchSnapshot();
  });
});
