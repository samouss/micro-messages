// @flow

import React from 'react';
import { shallow } from 'enzyme';
import AddMessageForm from '../index';

import type { Props } from '../index';

describe('<AddMessageForm />', () => {
  const defaultProps: Props = {
    onSubmit: () => {},
  };

  it('expect to render the component correctly', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <AddMessageForm
        {...props}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('expect to render the component correctly with body', () => {
    const props: Props = {
      ...defaultProps,
    };

    const component = shallow(
      <AddMessageForm
        {...props}
      />,
    );

    // $FlowFixMe
    component.setState({ body: 'Some content' });

    expect(component).toMatchSnapshot();
  });

  describe('onChange', () => {
    it('expect to update the state on radio change', () => {
      const props: Props = {
        ...defaultProps,
      };

      const expectation = {
        before: { visibility: 'public', body: '' },
        after: { visibility: 'private', body: '' },
      };

      const component = shallow(
        <AddMessageForm
          {...props}
        />,
      );

      // $FlowFixMe
      expect(component.state()).toEqual(expectation.before);

      component
        .find('[styleName="AddMessageForm__Row__Radio__Input"]')
        .first()
        .simulate('change', {
          currentTarget: {
            name: 'visibility',
            value: 'private',
          },
        });

      // $FlowFixMe
      expect(component.state()).toEqual(expectation.after);
    });

    it('expect to update the state on text change', () => {
      const props: Props = {
        ...defaultProps,
      };

      const expectation = {
        before: { visibility: 'public', body: '' },
        after: { visibility: 'public', body: 'Some text' },
      };

      const component = shallow(
        <AddMessageForm
          {...props}
        />,
      );

      // $FlowFixMe
      expect(component.state()).toEqual(expectation.before);

      component
        .find('[styleName="AddMessageForm__Row__Textarea"]')
        .first()
        .simulate('change', {
          currentTarget: {
            name: 'body',
            value: 'Some text',
          },
        });

      // $FlowFixMe
      expect(component.state()).toEqual(expectation.after);
    });
  });

  describe('onSubmit', () => {
    it('expect to call onSubmit on form submit', () => {
      const props: Props = {
        ...defaultProps,
        onSubmit: jest.fn(),
      };

      const preventDefault = jest.fn();

      const component = shallow(
        <AddMessageForm
          {...props}
        />,
      );

      component
        .find('form')
        .first()
        .simulate('submit', {
          preventDefault,
        });

      expect(preventDefault).toHaveBeenCalled();
      // $FlowFixMe
      expect(props.onSubmit).toHaveBeenCalledWith(component.state());
    });
  });
});
