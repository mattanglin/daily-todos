import { createAction } from 'typesafe-actions';
import { ITodo } from './types';

// Actions
export const setManaging = createAction('@todos/SET_MANAGING', ac => (flag: boolean) => ac(flag));
export const addTodo = createAction('@todos/ADD_TODO', ac => (params: Omit<ITodo, 'todoDone'>) => ac(params));
export const doTodo = createAction('@todos/DO_TODO', ac => (idx: number) => ac(idx));
