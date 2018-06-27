import React, { Component } from 'react';
import TodoCreator from './components/TodoCreator';
import FilterSelector from './components/FilterSelector';
import TodoList from './components/TodoList';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoCreator />
          <FilterSelector />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default Main;
