import React, { Component } from 'react';
import TodoCreator from './components/TodoCreator';
import FilterSelector from './components/FilterSelector';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoCreator />
          <FilterSelector />
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Here will be displayed your tasks</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
