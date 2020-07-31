import { Middleware, AnyAction } from 'redux';
import { RootState } from 'state-types';

export const persistTodosMiddleware: Middleware = api => next => (action: AnyAction) => {
  const { getState } = api;
  next(action);

  // Persist todos to localStorage
  if (typeof action.type === 'string' && action.type.includes('@todos')) {
    const state: RootState = getState();
    window.localStorage.setItem('todos', JSON.stringify(state.todos));
  }
};
