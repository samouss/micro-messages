// @flow

import React from 'react';
import cx from 'classnames';
import './index.css';

export type Props = {
  type: 'public' | 'private',
};

const Label = ({ type }: Props) => {
  const isPublic = type === 'public';

  return (
    <span
      styleName={cx('Label', {
        'Label--Public': isPublic,
        'Label--Private': !isPublic,
      })}
    >
      {isPublic ? 'Public' : 'Prive'}
    </span>
  );
};

export default Label;
