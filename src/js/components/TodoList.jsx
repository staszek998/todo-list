import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <h1 className="display-1">To do</h1>
          </div>
          <Todo text="Test todo 1" />
          <Todo text="Test todo 2" />
          <Todo text="Test todo 3" />
          <Todo text="Test todo 4" />
          <Todo text="Test todo 5" />
        </div>
      </div>
    );
  }
}

export default TodoList;
