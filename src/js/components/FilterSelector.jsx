import React, { Component } from 'react';

class FilterSelector extends Component {
  render() {
    return (
      <div className="col-4 card card-body">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary active">
            <input type="radio" />All
          </label>
          <label className="btn btn-secondary">
            <input type="radio" />Active
          </label>
          <label className="btn btn-secondary">
            <input type="radio" />Completed
          </label>
        </div>
      </div>
    );
  }
}

export default FilterSelector;
