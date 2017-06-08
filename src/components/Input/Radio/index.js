// @flow

import React from 'react';
import './index.css';

type Props = {
  id: string,
  children: React.Element<*>,
};

const Radio = ({ id, children, ...props }: Props) => (
  <label
    htmlFor={id}
    styleName="Radio"
  >
    <input
      id={id}
      styleName="Radio__Input"
      type="radio"
      {...props}
    />

    {children}
  </label>
);

export default Radio;
