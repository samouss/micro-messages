// @flow

import React from 'react';
import TimeFromNow from 'components/TimeFromNow';
import Label from 'components/Label';
import Paragraphs from 'components/Paragraphs';
import './index.css';

import type { Message } from '../../types';

export type Props = {
  message: Message,
};

const MessageViewer = ({ message }: Props) => (
  <div styleName="MessageViewer">
    <div styleName="MessageViewer__Header">
      <p styleName="MessageViewer__Row">
        <span styleName="MessageViewer__Row__Label">Reçu le:</span>
        <TimeFromNow
          date={message.date}
        />
      </p>

      <p styleName="MessageViewer__Row">
        <span styleName="MessageViewer__Row__Label">Visibilité:</span>
        <Label
          type={message.visibility}
        />
      </p>
    </div>

    <div styleName="MessageViewer__Content">
      <Paragraphs
        text={message.body}
      />
    </div>
  </div>
);

export default MessageViewer;
