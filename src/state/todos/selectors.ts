import { RootState } from 'state-types';
import { createSelector } from 'reselect';

export const getTodoState = (state: RootState) => state.todos;
export const getManaging = createSelector(getTodoState, state => state.managing);
export const getEditing = createSelector(getTodoState, state => state.editing);
export const getTitle = createSelector(getTodoState, state => state.title);
export const getTodos = createSelector(getTodoState, state => state.todos);