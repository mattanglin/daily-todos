import { createAction } from 'typesafe-actions';
import { ITodo } from './types';

// Actions
export const setManaging = createAction('@todos/SET_MANAGING', ac => (flag: boolean) => ac(flag));
export const setEditing = createAction('@todos/SET_EDITING', ac => (idx?: number) => ac(idx));
export const addTodo = createAction('@todos/ADD', ac => (params: Omit<ITodo, 'completed'>) => ac(params));
export const deleteTodo = createAction('@todos/DELETE', ac => (idx: number) => ac(idx));
export const updateTodo = createAction('@todos/UPDATE',
  ac => (idx: number, data: Omit<ITodo, 'completed'>) => ac({ idx, data })
);
export const completeTodo = createAction('@todos/COMPLETE', ac => (idx: number) => ac(idx));
