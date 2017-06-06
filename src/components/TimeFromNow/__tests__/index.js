// @flow

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import TimeFromDate from '../index';
import type { Props } from '../index';

jest.mock('moment', () => jest.fn());

describe('<TimeFromNow />', () => {
  const defaultProps: Props = {
    date: '2016-01-01T00:00:00.000Z',
  };

  it('expect to render the component correctly with date displayed with format', () => {
    const props = {
      ...defaultProps,
    };

    const mockMomentImplementation = {
      diff: jest.fn(() => 10),
      format: jest.fn(() => '01/01/2016'),
    };

    // $FlowFixMe
    moment.mockImplementation(() => mockMomentImplementation);

    const component = shallow(
      <TimeFromDate
        {...props}
      />,
    );

    expect(moment).toHaveBeenCalledWith(props.date);
    expect(moment().diff).toHaveBeenCalledWith(props.date, 'days');
    expect(moment().format).toHaveBeenCalledWith('DD/MM/YYYY');
    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly with date displayed with format from specific threshold', () => {
    const props = {
      ...defaultProps,
      threshold: 2,
    };

    const mockMomentImplementation = {
      diff: jest.fn(() => 5),
      format: jest.fn(() => '01/01/2016'),
    };

    // $FlowFixMe
    moment.mockImplementation(() => mockMomentImplementation);

    const component = shallow(
      <TimeFromDate
        {...props}
      />,
    );

    expect(moment).toHaveBeenCalledWith(props.date);
    expect(moment().diff).toHaveBeenCalledWith(props.date, 'days');
    expect(moment().format).toHaveBeenCalledWith('DD/MM/YYYY');
    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly with date displayed with specific format', () => {
    const props = {
      ...defaultProps,
      format: 'DD-MM-YYYY',
    };

    const mockMomentImplementation = {
      diff: jest.fn(() => 10),
      format: jest.fn(() => '01-01-2016'),
    };

    // $FlowFixMe
    moment.mockImplementation(() => mockMomentImplementation);

    const component = shallow(
      <TimeFromDate
        {...props}
      />,
    );

    expect(moment).toHaveBeenCalledWith(props.date);
    expect(moment().diff).toHaveBeenCalledWith(props.date, 'days');
    expect(moment().format).toHaveBeenCalledWith(props.format);
    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly with date displayed with relative format', () => {
    const props = {
      ...defaultProps,
    };

    const mockMomentImplementation = {
      diff: jest.fn(() => 5),
      fromNow: jest.fn(() => '5 days ago'),
    };

    // $FlowFixMe
    moment.mockImplementation(() => mockMomentImplementation);

    const component = shallow(
      <TimeFromDate
        {...props}
      />,
    );

    expect(moment).toHaveBeenCalledWith(props.date);
    expect(moment().diff).toHaveBeenCalledWith(props.date, 'days');
    expect(moment().fromNow).toHaveBeenCalledWith(true);
    expect(component).toMatchSnapshot();
  });
});
