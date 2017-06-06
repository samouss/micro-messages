// @flow

import React from 'react';
import './index.css';

type Props = {
  children: React.Element<*>,
};

const Layout = ({ children }: Props) => (
  <div styleName="Layout">
    {children}
  </div>
);

export default Layout;
