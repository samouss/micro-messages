// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getVisibilityFilter } from '../reducers';
import { changeVisibilityFilter } from '../actions';
import FiltersMessageForm from '../components/FiltersMessageForm';

import type { State, Dispatch } from 'store/types';
import type { VisibilityFilterState } from '../types';

export type Props = {
  visibility: VisibilityFilterState,
  onChangeVisibilityFilter: (VisibilityFilterState) => void,
};

export const FiltersMessage = ({ visibility, onChangeVisibilityFilter }: Props) => (
  <FiltersMessageForm
    visibility={visibility}
    onChange={onChangeVisibilityFilter}
  />
);

const mapStateToProps = (state: State) => ({
  visibility: getVisibilityFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeVisibilityFilter: filter => dispatch(changeVisibilityFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FiltersMessage);
