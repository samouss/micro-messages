// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../index';

describe('<Sidebar />', () => {
  it('expect to render the component correctly', () => {
    const component = shallow(
      <Sidebar>
        <div>Some content</div>
      </Sidebar>,
    );

    expect(component).toMatchSnapshot();
  });
});
