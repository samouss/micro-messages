// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../index';

describe('<Layout />', () => {
  it('expect to render the component correctly', () => {
    const component = shallow(
      <Layout>
        <div>Some content</div>
      </Layout>,
    );

    expect(component).toMatchSnapshot();
  });
});
