// @flow

import React from 'react';
import './index.css';

export type Props = {
  children: React.Element<*>,
};

const Circle = ({ children, ...props }: Props) => (
  <button
    {...props}
    styleName="Circle"
  >
    {children}
  </button>
);

export default Circle;
