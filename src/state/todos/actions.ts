import { createAction } from 'typesafe-actions';
import { ITodo } from './types';

// Actions
// export const addTodo = (params: Omit<ITodo, 'todoDone'>) => action('ADD_TODO', params);
export const addTodo = createAction('@todos/ADD_TODO', ac => (params: Omit<ITodo, 'todoDone'>) => ac(params));
export const doTodo = createAction('@todos/DO_TODO', ac => (idx: number) => ac(idx));
