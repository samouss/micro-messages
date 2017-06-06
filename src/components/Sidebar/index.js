// @flow

import React from 'react';
import './index.css';

type Props = {
  children: React.Element<*>,
};

const Sidebar = ({ children }: Props) => (
  <div styleName="container">
    {children}
  </div>
);

export default Sidebar;
