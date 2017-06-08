// @flow

import React from 'react';
import MessageItem from 'modules/messages/components/MessageItem';
import './index.css';

import type { Message } from 'modules/messages/types';

export type Props = {
  messages: Array<Message>,
};

const MessagesList = ({ messages }: Props) => (
  <ul styleName="MessagesList">
    {messages.map(message => (
      <MessageItem
        key={message.id}
        message={message}
      />
    ))}
  </ul>
);

export default MessagesList;
