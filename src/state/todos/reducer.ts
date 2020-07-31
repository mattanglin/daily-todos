import { RootAction } from 'state-types';
import { createReducer } from 'typesafe-actions';
import {
  doTodo,
} from './actions';
import { ITodosState, TodoType } from './types';

export const defaultInitialState: ITodosState = {
  editing: false,
  title: 'Daily Todo List',
  todaysDate: new Date().toISOString(),
  todos: [{
    title: 'Manage my daily todos',
    type: TodoType.BASIC,
    todoDone: 0,
  }],
}

export const getInitialState = (): ITodosState => {
  // TODO: load initial state
  const todosJSON = window.localStorage.getItem('todos');

  if (todosJSON) {
    try {
      const data: ITodosState = JSON.parse(todosJSON);

      // Cautiously map all values
      const today = new Date();
      const storedDate = new Date(data.todaysDate);
      const clearTodos = storedDate.getFullYear() !== today.getFullYear() ||
        storedDate.getMonth() !== today.getMonth() ||
        storedDate.getDate() !== today.getDate();

      // TODO: Omit invalid todos?
      const todos = data.todos.map(todo => ({
        ...todo,
        todoDone: clearTodos ? 0 : todo.todoDone,
      }));

      return {
        editing: todos.length === 0,
        title: data.title,
        todaysDate: new Date().toISOString(),
        todos,
      }
    } catch(err) {
      return defaultInitialState;
    }
  }

  return defaultInitialState;
}

// Reducer

const reducer = createReducer<ITodosState, RootAction>(getInitialState())
  .handleAction(doTodo, (state, action) => {
    const todoIdx = action.payload;
    const todo = state.todos[todoIdx];

    if (todo) {
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIdx),
          {
            ...todo,
            todoDone: todo.todoDone + 1,
          },
          ...state.todos.slice(todoIdx + 1),
        ]
      };
    }
    return state;
  });

export default reducer;
