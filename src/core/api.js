// @flow

import type { Message } from 'modules/messages/types';
import { timeoutify } from './utils';
import db from '../../db.json';

export const fetchMessages = (): Promise<Array<Message>> => {
  return timeoutify().then(() => db);
};
