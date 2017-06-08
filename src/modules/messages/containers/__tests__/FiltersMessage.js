// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'test/store';
import { getVisibilityFilter } from '../../reducers';
import Connect, { FiltersMessage } from '../FiltersMessage';

import type { Props } from '../FiltersMessage';

jest.mock('../../reducers', () => ({
  getVisibilityFilter: jest.fn(state => state),
}));

jest.mock('../../actions', () => ({
  changeVisibilityFilter: jest.fn(filter => ({
    type: 'CHANGE_VISIBILITY_FILTER',
    filter,
  })),
}));

describe('<FiltersMessage />', () => {
  const createContext = state => ({
    store: createMockStore(state),
  });

  const defaultProps: Props = {
    visibility: 'all',
    onChangeVisibilityFilter: () => {},
  };

  it('expect to render the component correctly', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <FiltersMessage
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly', () => {
    const props: Props = {
      ...defaultProps,
      onChangeVisibilityFilter: jest.fn(),
    };

    const component = shallow(
      <FiltersMessage
        {...props}
      />,
    );

    component
      .find('FiltersMessageForm')
      .simulate('change');

    expect(props.onChangeVisibilityFilter).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('expect to call getVisibilityFilter', () => {
      const state = { visibilityFilter: 'all' };
      const context = createContext(state);

      shallow(
        <Connect />,
        { context },
      );

      expect(getVisibilityFilter).toHaveBeenCalledWith(state);
    });
  });

  describe('mapDispatchToProps', () => {
    it('expect to bind changeVisibilityFilter', () => {
      const filter = 'public';
      const context = createContext();

      const component = shallow(
        <Connect />,
        { context },
      );

      // $FlowFixMe
      component.props().onChangeVisibilityFilter(filter);

      expect(context.store.dispatch).toHaveBeenCalledWith({
        type: 'CHANGE_VISIBILITY_FILTER',
        filter,
      });
    });
  });
});
