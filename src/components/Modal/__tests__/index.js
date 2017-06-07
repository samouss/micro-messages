// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../index';

describe('<Modal />', () => {
  const defaultProps = {
    isOpen: false,
    onClose: () => {},
  };

  it('expect to render the component correctly closed', () => {
    const props = {
      ...defaultProps,
    };

    const component = shallow(
      <Modal
        {...props}
      >
        <div>some content</div>
      </Modal>,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly open', () => {
    const props = {
      ...defaultProps,
      isOpen: true,
    };

    const component = shallow(
      <Modal
        {...props}
      >
        <div>some content</div>
      </Modal>,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to call onClose when button is clicked', () => {
    const props = {
      ...defaultProps,
      onClose: jest.fn(),
    };

    const component = shallow(
      <Modal
        {...props}
      >
        <div>some content</div>
      </Modal>,
    );

    component
      .find('[styleName="Modal__Header__Button"]')
      .simulate('click');

    expect(props.onClose).toHaveBeenCalled();
  });
});
