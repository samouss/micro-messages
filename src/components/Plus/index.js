// @flow

import React from 'react';
import './index.css';

export type Props = {
  customClassName?: string,
};

const Plus = ({ customClassName = '', ...props }: Props) => (
  <div
    {...props}
    styleName="Plus"
    className={customClassName}
  />
);

export default Plus;
