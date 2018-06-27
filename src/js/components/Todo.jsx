import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Todo extends Component {
  render() {
    return (
      <div className="card card-body">
        <div className="row">
          <div className="col-1">
            {this.props.completed ? (
              <input type="checkbox" onClick={this.props.toggleTodo} checked />
            ) : (
              <input type="checkbox" onClick={this.props.toggleTodo} />
            )}
          </div>
          <div className="col-10">
            <h4>{this.props.text}</h4>
          </div>
          <div className="col-1">
            <FontAwesome name="times" onClick={this.props.removeTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
