// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '../Overlay';

describe('<Overlay />', () => {
  const defaultProps = {
    isOpen: false,
  };

  it('expect to render the component correctly closed', () => {
    const props = {
      ...defaultProps,
    };

    const component = shallow(
      <Overlay {...props}>
        <div>some content</div>
      </Overlay>,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly open', () => {
    const props = {
      ...defaultProps,
      isOpen: true,
    };

    const component = shallow(
      <Overlay {...props}>
        <div>some content</div>
      </Overlay>,
    );

    expect(component).toMatchSnapshot();
  });
});
