// @flow

import React from 'react';
import { shallow } from 'enzyme';
import FiltersMessageForm from '../index';

import type { Props } from '../index';

describe('<FiltersMessageForm />', () => {
  const defaultProps: Props = {
    visibility: 'all',
    onChange: () => {},
  };

  it('expect to render the component correctly', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <FiltersMessageForm
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly with public selected', () => {
    const props: Props = {
      ...defaultProps,
      visibility: 'public',
    };

    const component = shallow(
      <FiltersMessageForm
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to call onChange on radio change', () => {
    const props: Props = {
      ...defaultProps,
      onChange: jest.fn(),
    };

    const component = shallow(
      <FiltersMessageForm
        {...props}
      />,
    );

    component
      .find('Radio')
      .first()
      .simulate('change');

    component
      .find('Radio')
      .at(1)
      .simulate('change');

    expect(props.onChange).toHaveBeenCalledTimes(2);
  });
});
