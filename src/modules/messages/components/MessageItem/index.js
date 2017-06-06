// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import TimeFromNow from 'components/TimeFromNow';
import Label from 'components/Label';
import './index.css';

import type { Message } from '../../types';

export type Props = {
  message: Message,
};

const MessageItem = ({ message }: Props) => (
  <li>
    <NavLink
      to={`/${message.id}`}
      styleName="MessageItem"
      activeStyle={{
        backgroundColor: '#0169D9',
        color: '#FFFFFF',
      }}
    >
      <div styleName="MessageItem__Container">
        <div styleName="MessageItem__Preview">
          {message.body}
        </div>

        <div styleName="MessageItem__Infos">
          <span styleName="MessageItem__Infos__Date">
            <TimeFromNow
              date={message.date}
            />
          </span>

          <span styleName="MessageItem__Infos__Visibility">
            <Label
              type={message.visibility}
            />
          </span>
        </div>
      </div>
    </NavLink>
  </li>
);

export default MessageItem;
