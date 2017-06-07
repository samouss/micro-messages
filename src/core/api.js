// @flow

import { timeoutify } from './utils';
import db from '../../db.json';

import type { Message } from 'modules/messages/types';

export const fetchMessages = (): Promise<Array<Message>> => {
  return timeoutify().then(() => db);
};

export const postMessage = (message: Message): Promise<Message> => {
  return timeoutify().then(() => message);
};
