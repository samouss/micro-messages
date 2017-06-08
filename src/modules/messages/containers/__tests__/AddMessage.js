// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'test/store';
import Connect, { AddMessage } from '../AddMessage';

import type { Props } from '../AddMessage';

jest.mock('../../actions', () => ({
  postMessage: jest.fn(input => input),
}));

describe('<AddMessage />', () => {
  const createContext = () => ({
    store: createMockStore(),
  });

  const defaultProps: Props = {
    postMessage: () => Promise.resolve(),
  };

  it('expect to render the component correctly', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <AddMessage
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  describe('toggleModal', () => {
    it('expect to open modal on AddMessageButton click', () => {
      const props: Props = {
        ...defaultProps,
      };

      const component = shallow(
        <AddMessage
          {...props}
        />,
      );

      component
        .find('AddMessageButton')
        .simulate('click');

      expect(component).toMatchSnapshot();
    });

    it('expect to close modal on AddMessageButton click', () => {
      const props: Props = {
        ...defaultProps,
      };

      const component = shallow(
        <AddMessage
          {...props}
        />,
      );

      // $FlowFixMe
      component.setState({ isOpen: true });

      component
        .find('AddMessageButton')
        .simulate('click');

      expect(component).toMatchSnapshot();
    });
  });

  describe('onSubmit', () => {
    it('expect to call postMessage on AddMessageForm submit', () => {
      const props: Props = {
        ...defaultProps,
        postMessage: jest.fn(() => Promise.resolve()),
      };

      const component = shallow(
        <AddMessage
          {...props}
        />,
      );

      component
        .find('AddMessageForm')
        .simulate('submit');

      expect(props.postMessage).toHaveBeenCalled();
    });

    it('expect to successfully call postMessage', () => {
      expect.assertions(2);

      const props: Props = {
        ...defaultProps,
        postMessage: jest.fn(() => Promise.resolve()),
      };

      const input = {
        body: 'Some content',
        visibility: 'public',
      };

      const toggleModal = jest.spyOn(AddMessage.prototype, 'toggleModal');

      const component = shallow(
        <AddMessage
          {...props}
        />,
      );

      // $FlowFixMe
      return component.instance().onSubmit(input).then(() => {
        expect(props.postMessage).toHaveBeenCalledWith(input);
        expect(toggleModal).toHaveBeenCalled();

        toggleModal.mockReset();
        toggleModal.mockRestore();
      });
    });

    it('expect to fail to call postMessage', () => {
      expect.assertions(2);

      const props: Props = {
        ...defaultProps,
        postMessage: jest.fn(() => Promise.reject()),
      };

      const input = {
        body: 'Some content',
        visibility: 'public',
      };

      const toggleModal = jest.spyOn(AddMessage.prototype, 'toggleModal');

      const component = shallow(
        <AddMessage
          {...props}
        />,
      );

      // $FlowFixMe
      return component.instance().onSubmit(input).then(() => {
        expect(props.postMessage).toHaveBeenCalledWith(input);
        expect(toggleModal).not.toHaveBeenCalled();

        toggleModal.mockReset();
        toggleModal.mockRestore();
      });
    });
  });

  describe('mapDisptachToProps', () => {
    it('expect to bind postMessage', () => {
      const context = createContext();

      const input = {
        body: 'Some content',
        visibility: 'public',
      };

      const component = shallow(
        <Connect />,
        { context },
      );

      // $FlowFixMe
      component.props().postMessage(input);

      expect(context.store.dispatch).toHaveBeenCalledWith(input);
    });
  });
});
