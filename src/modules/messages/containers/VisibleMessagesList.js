// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import { fetchMessages } from '../actions';
import { getMessages } from '../reducers';
import MessagesList from '../components/MessagesList';

import type { State, Dispatch } from 'store/types';
import type { Message } from '../types';

type DefaultProps = {
  messages: Array<Message>,
};

export type Props = {
  messages: Array<Message>,
  fetchMessages: () => Promise<void>,
};

type ComponentState = {
  isLoading: boolean,
};

export class VisibleMessagesList extends Component {
  static defaultProps: DefaultProps;
  props: Props;
  state: ComponentState

  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages() {
    return this.props.fetchMessages().then(() => {
      this.setState({ isLoading: !this.state.isLoading });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <MessagesList
        messages={this.props.messages}
      />
    );
  }
}

VisibleMessagesList.defaultProps = {
  messages: [],
};

const mapStateToProps = (state: State) => ({
  messages: getMessages(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchMessages: () => dispatch(fetchMessages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibleMessagesList);
