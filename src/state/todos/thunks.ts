import { Thunk } from 'state-types';
import { setEditing } from './actions';
import { getEditing } from './selectors';

export const editTodo = (idx: number): Thunk => (dispatch, getState) => {
  // Only set editing if we're not already editing
  const state = getState();
  const editing = getEditing(state);

  if (editing === undefined) {
    dispatch(setEditing(idx));
  }
}
