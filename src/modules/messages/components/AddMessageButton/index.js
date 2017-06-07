// @flow

import React from 'react';
import Plus from 'components/Plus';
import { CircleButton } from 'components/Button';
import './index.css';

const AddMessageButton = (props: Object) => (
  <div
    styleName="AddMessageButton"
  >
    <CircleButton
      {...props}
    >
      <Plus />
    </CircleButton>
  </div>
);

export default AddMessageButton;
