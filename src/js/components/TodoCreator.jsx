import React, { Component } from 'react';

class TodoCreator extends Component {
  render() {
    return (
      <form
        action="submit"
        className="col-8 card"
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <div className="card-body form-group d-flex flex-row">
          <input
            placeholder="What do you want to do?"
            type="text"
            className="form-control"
          />
          <input
            type="submit"
            value="Create task"
            className="btn btn-primary"
          />
        </div>
      </form>
    );
  }
}

export default TodoCreator;
