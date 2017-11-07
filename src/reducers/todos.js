import { combineReducers } from 'redux';
import todo from './todo';

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TODO':
  case 'TOGGLE_TODO':
    return {
      ...state,
      [action.id]: todo(state[action.id], action),
    };
  default:
    return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [...state, action.id];
  default:
    return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

const todos = combineReducers({
  byId,
  idsByFilter,
});

export default todos

// Selector functions

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
}
