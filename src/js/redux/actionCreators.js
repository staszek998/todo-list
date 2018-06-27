import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './actionTypes';

const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

const removeTodo = index => {
  return {
    type: REMOVE_TODO,
    index
  };
};

const toggleTodo = index => {
  return {
    type: TOGGLE_TODO,
    index
  };
};

const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export { addTodo, removeTodo, toggleTodo, setVisibilityFilter };
