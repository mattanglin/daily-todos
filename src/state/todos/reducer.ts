import { RootAction } from 'state-types';
import { createReducer } from 'typesafe-actions';
import {
  setManaging,
  updateTitle,
  setEditing,
  addTodo,
  deleteTodo,
  updateTodo,
  completeTodo,
  resetTodo,
} from './actions';
import { ITodosState, TodoType } from './types';

export const defaultInitialState: ITodosState = {
  managing: false,
  title: 'Daily Todo List',
  todaysDate: new Date().toISOString(),
  todos: [{
    title: 'Manage my daily todos',
    type: TodoType.BASIC,
    completed: 0,
  }],
}

// Get reducer initial state conditionally from localStorage
export const getInitialState = (): ITodosState => {
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
        completed: clearTodos ? 0 : todo.completed,
      }));

      return {
        managing: todos.length === 0,
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
  .handleAction(setManaging, (state, action) => ({
    ...state,
    managing: action.payload,
    editing: !action.payload ? undefined : state.editing,
  }))
  .handleAction(updateTitle, (state, action) => ({
    ...state,
    title: action.payload,
  }))
  .handleAction(setEditing, (state, action) => ({
    ...state,
    // Only set if we're already managing
    editing: state.managing ? action.payload : undefined,
  }))
  .handleAction(addTodo, (state, action) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        ...action.payload,
        completed: 0,
      }
    ]
  }))
  .handleAction(updateTodo, (state, action) => {
    const todoIdx = action.payload.idx;
    const todo = state.todos[todoIdx];

    if (todo) {
      return {
        ...state,
        editing: undefined,
        todos: [
          ...state.todos.slice(0, todoIdx),
          {
            ...todo,
            ...action.payload.data,
          },
          ...state.todos.slice(todoIdx + 1),
        ]
      }
    }

    return state;
  })
  .handleAction(deleteTodo, (state, action) => ({
    ...state,
    todos: state.todos.filter((_, idx) => idx !== action.payload),
  }))
  .handleAction(completeTodo, (state, action) => {
    const todoIdx = action.payload;
    const todo = state.todos[todoIdx];

    if (todo) {
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIdx),
          {
            ...todo,
            completed: todo.completed + 1,
          },
          ...state.todos.slice(todoIdx + 1),
        ]
      };
    }
    return state;
  })
  .handleAction(resetTodo, (state, action) => {
    const todoIdx = action.payload;
    const todo = state.todos[todoIdx];

    if (todo) {
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIdx),
          {
            ...todo,
            completed: 0,
          },
          ...state.todos.slice(todoIdx + 1),
        ]
      };
    }
    return state;
  });

export default reducer;