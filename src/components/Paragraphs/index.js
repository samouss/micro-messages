// @flow

import React from 'react';
import './index.css';

export type Props = {
  text: string;
};

const Paragraphs = ({ text }: Props) => (
  <p styleName="Paragraphs">
    {text}
  </p>
);

export default Paragraphs;
