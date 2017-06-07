// @flow

import React from 'react';
import cx from 'classnames';
import './Overlay.css';

export type Props = {
  isOpen: boolean,
};

const Overlay = ({ isOpen }: Props) => (
  <div
    styleName={cx('Overlay', {
      'Overlay--visible': isOpen,
    })}
  />
);

export default Overlay;
