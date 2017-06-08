// @flow

import React from 'react';
import { GroupInput, RadioInput } from 'components/Input';
import Label from 'components/Label';
import './index.css';

import type { Visibility, VisibilityFilter } from '../../types';

export type Props = {
  visibility: VisibilityFilter,
  onChange: VisibilityFilter => void,
}

const FiltersMessageForm = ({ visibility, onChange }: Props) => {
  const onRadioChange = (event: Event & { currentTarget: HTMLInputElement }) => {
    // $FlowFixMe
    onChange(event.currentTarget.value);
  };

  return (
    <form styleName="FiltersMessageForm">
      <span styleName="FiltersMessageForm__Label">
        Visibilité:
      </span>

      <GroupInput>
        <RadioInput
          id="all"
          name="visibility"
          onChange={onRadioChange}
          value="all"
          checked={visibility === 'all'}
        >
          Tout
        </RadioInput>

        {(['public', 'private']: Array<Visibility>).map(current => (
          <RadioInput
            key={current}
            id={current}
            name="visibility"
            onChange={onRadioChange}
            value={current}
            checked={visibility === current}
          >
            <Label
              type={current}
            />
          </RadioInput>
        ))}
      </GroupInput>
    </form>
  );
};

export default FiltersMessageForm;
