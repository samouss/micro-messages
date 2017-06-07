// @flow

import React from 'react';
import './index.css';

export type Props = {
  children: React.Element<*>,
};

const Submit = ({ children, ...props }: Props) => (
  <button
    {...props}
    styleName="Submit"
  >
    {children}
  </button>
);

export default Submit;
