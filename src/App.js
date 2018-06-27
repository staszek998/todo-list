import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducers from './js/redux/reducers';
import Main from './js/Main';
import './App.css';

const store = createStore(combinedReducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
