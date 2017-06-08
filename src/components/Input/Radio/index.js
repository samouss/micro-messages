// @flow

import React from 'react';
import './index.css';

type Props = {
  id: string,
  children: React.Element<*>,
};

const Radio = ({ id, children, ...props }: Props) => (
  // eslint-disable-next-line jsx-a11y/label-has-for
  <label styleName="Radio">
    <input
      styleName="Radio__Input"
      type="radio"
      {...props}
    />

    {children}
  </label>
);

export default Radio;
