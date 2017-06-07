// @flow

import React, { Component } from 'react';
import Label from 'components/Label';
import { SubmitButton } from 'components/Button';
import './index.css';

import type { MessageInput, Visibility } from '../../types';

export type Props = {
  onSubmit: MessageInput => void,
};

export type State = MessageInput;

class AddMessageForm extends Component {
  props: Props;
  state: State;

  onChange: (Event & { currentTarget: HTMLInputElement }) => void;
  onSubmit: (Event) => void;

  constructor(props: Props) {
    super(props);

    this.state = {
      body: '',
      visibility: 'public',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event: Event & { currentTarget: HTMLInputElement }) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    const { body, visibility } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div styleName="AddMessageForm__Row">
          <span styleName="AddMessageForm__Row__Label">Visibilité:</span>
          <div styleName="AddMessageForm__Row__Radios">
            {(['public', 'private']: Array<Visibility>).map(current => (
              <label
                key={current}
                htmlFor={current}
                styleName="AddMessageForm__Row__Radio"
              >
                <input
                  id={current}
                  styleName="AddMessageForm__Row__Radio__Input"
                  name="visibility"
                  type="radio"
                  value={current}
                  checked={current === visibility}
                  onChange={this.onChange}
                  required
                />

                <Label
                  type={current}
                />
              </label>
            ))}
          </div>
        </div>

        <div styleName="AddMessageForm__Row">
          <textarea
            name="body"
            styleName="AddMessageForm__Row__Textarea"
            placeholder="Entrer votre message..."
            onChange={this.onChange}
            value={body}
            required
          />
        </div>

        <div styleName="AddMessageForm__Row">
          <SubmitButton>
            Envoyer
          </SubmitButton>
        </div>

      </form>
    );
  }
}

export default AddMessageForm;
