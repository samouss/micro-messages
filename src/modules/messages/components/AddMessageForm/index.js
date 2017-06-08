// @flow

import React, { Component } from 'react';
import Label from 'components/Label';
import { SubmitButton } from 'components/Button';
import { GroupInput, RadioInput } from 'components/Input';
import './index.css';

import type { MessageInput, Visibility } from '../../types';

export type Props = {
  onSubmit: MessageInput => Promise<void>,
};

export type State = MessageInput & {
  isLoading: boolean,
};

class AddMessageForm extends Component {
  props: Props;
  state: State;

  onChange: (Event & { currentTarget: HTMLInputElement }) => void;
  onSubmit: (Event) => void;

  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
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

    this.setState({ isLoading: true });

    return this.props.onSubmit({
      body: this.state.body,
      visibility: this.state.visibility,
    }).then(() => {
      this.setState({
        isLoading: false,
        body: '',
        visibility: 'public',
      });
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading, body, visibility } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div styleName="AddMessageForm__Row">
          <span styleName="AddMessageForm__Row__Label">Visibilité:</span>
          <GroupInput>
            {(['public', 'private']: Array<Visibility>).map(current => (
              <RadioInput
                key={current}
                id={current}
                name="visibility"
                value={current}
                checked={current === visibility}
                onChange={this.onChange}
                required
              >
                <Label
                  type={current}
                />
              </RadioInput>
            ))}
          </GroupInput>
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
          <SubmitButton
            disabled={isLoading}
          >
            Envoyer
          </SubmitButton>
        </div>

      </form>
    );
  }
}

export default AddMessageForm;
