import { combineReducers } from 'redux';

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  visibilityFilters
} from './actionTypes';

const { SHOW_ALL } = visibilityFilters;

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case REMOVE_TODO:
      return state.filter((todo, index) => {
        return index !== action.index;
      });
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const combinedReducers;

export default (combinedReducers = combineReducers({
  todos,
  visibilityFilter
}));
