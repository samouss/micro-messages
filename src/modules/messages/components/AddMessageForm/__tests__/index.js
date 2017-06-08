// @flow

import React from 'react';
import { shallow } from 'enzyme';
import AddMessageForm from '../index';

import type { Props, State } from '../index';

describe('<AddMessageForm />', () => {
  const defaultProps: Props = {
    onSubmit: () => Promise.resolve(),
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
        before: {
          isLoading: false,
          visibility: 'public',
          body: '',
        },
        after: {
          isLoading: false,
          visibility: 'private',
          body: '',
        },
      };

      const component = shallow(
        <AddMessageForm
          {...props}
        />,
      );

      // $FlowFixMe
      expect(component.state()).toEqual(expectation.before);

      component
        .find('Radio')
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
        before: {
          isLoading: false,
          visibility: 'public',
          body: '',
        },
        after: {
          isLoading: false,
          visibility: 'public',
          body: 'Some text',
        },
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
    it('expect to call onSubmit when form is submitted', () => {
      const props: Props = {
        ...defaultProps,
        onSubmit: jest.fn(() => Promise.resolve()),
      };

      const component = shallow(
        <AddMessageForm
          {...props}
        />,
      );

      const expectation = true;

      component
        .find('form')
        .simulate('submit', {
          preventDefault: () => {},
        });

      expect(props.onSubmit).toHaveBeenCalled();
      // $FlowFixMe
      expect(component.state().isLoading).toBe(expectation);
      expect(component).toMatchSnapshot();
    });

    it('expect to successfully call onSubmit', () => {
      expect.assertions(3);

      const preventDefault = jest.fn();

      const props: Props = {
        ...defaultProps,
        onSubmit: jest.fn(() => Promise.resolve()),
      };

      const nextState = {
        visibility: 'private',
        body: 'Some content',
      };

      const expectation: State = {
        isLoading: false,
        visibility: 'public',
        body: '',
      };

      const component = shallow(
        <AddMessageForm
          {...props}
        />,
      );

      // $FlowFixMe
      component.setState(nextState);

      // $FlowFixMe
      return component.instance().onSubmit({ preventDefault }).then(() => {
        expect(preventDefault).toHaveBeenCalled();
        expect(props.onSubmit).toHaveBeenCalledWith(nextState);
        // $FlowFixMe
        expect(component.state()).toEqual(expectation);
      });
    });

    it('expect to fail to call onSubmit', () => {
      expect.assertions(3);

      const preventDefault = jest.fn();

      const props: Props = {
        ...defaultProps,
        onSubmit: jest.fn(() => Promise.reject()),
      };

      const nextState = {
        visibility: 'private',
        body: 'Some content',
      };

      const expectation: State = {
        isLoading: false,
        visibility: 'private',
        body: 'Some content',
      };

      const component = shallow(
        <AddMessageForm
          {...props}
        />,
      );

      // $FlowFixMe
      component.setState(nextState);

      // $FlowFixMe
      return component.instance().onSubmit({ preventDefault }).then(() => {
        expect(preventDefault).toHaveBeenCalled();
        expect(props.onSubmit).toHaveBeenCalledWith(nextState);
        // $FlowFixMe
        expect(component.state()).toEqual(expectation);
      });
    });
  });
});
