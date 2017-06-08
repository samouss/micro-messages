// @flow

import React from 'react';
import './index.css';

type Props = {
  children: React.Element<*>,
};

const Group = ({ children, ...props }: Props) => (
  <div
    {...props}
    styleName="Group"
  >
    {children}
  </div>
);

export default Group;
