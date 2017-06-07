// @flow

import React from 'react';
import cx from 'classnames';
import Overlay from './Overlay';
import './index.css';

export type Props = {
  isOpen: boolean,
  onClose: () => void,
  children: React.Element<*>,
};

const Modal = ({ isOpen, onClose, children }: Props) => (
  <div styleName="Modal">
    <Overlay
      isOpen={isOpen}
    />

    <div
      styleName={cx('Modal__Container', {
        'Modal__Container--visible': isOpen,
      })}
    >
      <div styleName="Modal__Header">
        <button
          styleName="Modal__Header__Close"
          onClick={onClose}
        >
          X
        </button>
      </div>

      <div styleName="Modal__Content">
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
