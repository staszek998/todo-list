import React, { Component } from 'react';
import Todo from './Todo';
import { toggleTodo, removeTodo } from '../redux/actionCreators';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <h1 className="display-1">To do</h1>
          </div>
          {this.props.todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                {...todo}
                toggleTodo={() => this.props.toggleTodo(index)}
                removeTodo={() => this.props.removeTodo(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: index => {
      dispatch(toggleTodo(index));
    },
    removeTodo: index => {
      dispatch(removeTodo(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
