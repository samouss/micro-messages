// @flow

import React from 'react';
import moment from 'moment';

export type Props = {
  date: string,
  threshold?: number, // in days
  format?: string,
};

const TimeFromDate = ({ date, threshold = 7, format = 'DD/MM/YYYY' }: Props) => {
  const diff = moment().diff(date, 'days');
  const time = diff >= threshold ? moment(date).format(format)
    : moment(date).fromNow();

  return (
    <span>{time}</span>
  );
};

export default TimeFromDate;
