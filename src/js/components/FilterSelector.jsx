import React, { Component } from 'react';
import { visibilityFilters } from '../redux/actionTypes';
import { setVisibilityFilter } from '../redux/actionCreators';
import { connect } from 'react-redux';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = visibilityFilters;

const clearActiveState = (labelOne, labelTwo, labelThree) => {
  labelOne.classList.remove('active');
  labelTwo.classList.remove('active');
  labelThree.classList.remove('active');
};

const setActive = label => {
  label.classList.add('active');
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
                clearActiveState(buttonAll, buttonActive, buttonCompleted);
                this.props.dispatch(setVisibilityFilter(SHOW_ALL));
                setActive(buttonAll);
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
                clearActiveState(buttonAll, buttonActive, buttonCompleted);
                this.props.dispatch(setVisibilityFilter(SHOW_ACTIVE));
                setActive(buttonActive);
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
                clearActiveState(buttonAll, buttonActive, buttonCompleted);
                this.props.dispatch(setVisibilityFilter(SHOW_COMPLETED));
                setActive(buttonCompleted);
              }}
            />Completed
          </label>
        </div>
      </div>
    );
  }
}

export default connect()(FilterSelector);
