// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getMessage } from '../reducers';
import MessageViewer from '../components/MessageViewer';

import type { Match } from 'react-router-dom';
import type { State } from 'store/types';
import type { Message } from '../types';

export type Props = {
  message: Message,
};

export type OwnProps = {
  match: Match,
};

export const VisibleMessage = ({ message }: Props) => {
  if (!message) {
    return null;
  }

  return (
    <MessageViewer
      message={message}
    />
  );
};

const mapStateToProps = (state: State, ownProps: OwnProps): Props => ({
  message: getMessage(state, ownProps.match.params.messageId),
});

export default connect(
  mapStateToProps,
)(VisibleMessage);
