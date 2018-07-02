import React, { Component } from 'react';
import { visibilityFilters } from '../redux/actionTypes';
import { setVisibilityFilter } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { EALREADY } from 'constants';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = visibilityFilters;

const clearActiveState = labelsToSetInactive => {
  labelsToSetInactive.forEach(label => {
    label.classList.remove('active');
  });
};

const changeActiveState = (labelToSetActive, allLabels) => {
  clearActiveState(allLabels);
  labelToSetActive.classList.add('active');
};

class FilterSelector extends Component {
  render() {
    let buttonAll, buttonActive, buttonCompleted;

    return (
      <div className="col-4 card card-body">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            className="btn btn-secondary active"
            ref={node => (buttonAll = node)}
          >
            <input
              type="radio"
              onClick={() => {
                changeActiveState(buttonAll, [buttonActive, buttonCompleted]);
                this.props.dispatch(setVisibilityFilter(SHOW_ALL));
              }}
            />All
          </label>
          <label
            className="btn btn-secondary"
            ref={node => (buttonActive = node)}
          >
            <input
              type="radio"
              onClick={() => {
                changeActiveState(buttonActive, [buttonAll, buttonCompleted]);
                this.props.dispatch(setVisibilityFilter(SHOW_ACTIVE));
              }}
            />Active
          </label>
          <label
            className="btn btn-secondary"
            ref={node => (buttonCompleted = node)}
          >
            <input
              type="radio"
              onClick={() => {
                changeActiveState(buttonCompleted, [buttonActive, buttonAll]);
                this.props.dispatch(setVisibilityFilter(SHOW_COMPLETED));
              }}
            />Completed
          </label>
        </div>
      </div>
    );
  }
}

export default connect()(FilterSelector);
