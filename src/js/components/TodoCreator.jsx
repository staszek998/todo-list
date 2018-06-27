import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actionCreators';

class TodoCreator extends Component {
  render() {
    let input;

    return (
      <form
        action="submit"
        className="col-8 card"
        onSubmit={event => {
          event.preventDefault();
          console.log(input.value);
          this.props.dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <div className="card-body form-group d-flex flex-row">
          <input
            ref={node => (input = node)}
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

export default connect()(TodoCreator);
