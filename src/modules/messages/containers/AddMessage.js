// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Modal';
import { postMessage } from '../actions';
import AddMessageButton from '../components/AddMessageButton';
import AddMessageForm from '../components/AddMessageForm';

import type { Dispatch } from 'store/types';
import type { MessageInput } from '../types';

export type Props = {
  postMessage: (MessageInput) => Promise<void>,
}

export type State = {
  isOpen: boolean,
};

export class AddMessage extends Component {
  props: Props;
  state: State;

  toggleModal: () => void;
  onSubmit: MessageInput => Promise<void>;

  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onSubmit(input: MessageInput) {
    return this.props.postMessage(input).then(() => {
      this.toggleModal();
    }).catch(() => {
      // @NOTE: display error
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Modal
          isOpen={isOpen}
          onClose={this.toggleModal}
        >
          <AddMessageForm
            onSubmit={this.onSubmit}
          />
        </Modal>

        <AddMessageButton
          onClick={this.toggleModal}
        />
      </div>
    );
  }

}

const mapDisptachToProps = (dispatch: Dispatch) => ({
  postMessage: (input: MessageInput) => dispatch(postMessage(input)),
});

export default connect(
  null,
  mapDisptachToProps,
)(AddMessage);
