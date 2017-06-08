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
      .simulate('change', {
        currentTarget: {
          value: 'all',
        },
      });

    component
      .find('Radio')
      .at(1)
      .simulate('change', {
        currentTarget: {
          value: 'public',
        },
      });

    expect(props.onChange.mock.calls[0][0]).toBe('all');
    expect(props.onChange.mock.calls[1][0]).toBe('public');
  });
});
