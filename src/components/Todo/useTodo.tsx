import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors, ITodo } from 'state/todos';
import Todo from './Todo';
// import { ITodo } from 'state/todos';

export enum TodoDisplay {
  EDIT = 'EDIT',
  MANAGE = 'MANAGE',
  VIEW = 'VIEW',
}

export const useTodo = (idx: number) => {
  const todos = useSelector(selectors.getTodos);
  const todo = todos[idx];
  const editing = useSelector(selectors.getEditing);
  const managing = useSelector(selectors.getManaging);

  const display = useMemo(() => {
    if (editing === idx) return TodoDisplay.EDIT;
    if (managing) return TodoDisplay.MANAGE;
    return TodoDisplay.VIEW;
  }, [editing, managing, idx]);

  const dispatch = useDispatch();
  const edit = useCallback(() => {
    if (editing === undefined) {
      dispatch(actions.setEditing(idx));
    }
  }, [dispatch, editing, idx]);
  const cancelEdit = useCallback(() => {
    dispatch(actions.setEditing());
  }, [dispatch]);

  const update = useCallback((data: Omit<ITodo, 'completed'>) => {
    dispatch(actions.updateTodo(idx, data));
  }, [dispatch, idx]);

  const deleteTodo = useCallback(() => dispatch(actions.deleteTodo(idx)), [dispatch, idx]);

  const complete = useCallback(() => {
    dispatch(actions.completeTodo(idx));
  }, [dispatch, idx]);

  return {
    // Values
    title: todo.title,
    type: todo.type,
    completed: todo.completed,
    // Other
    display,
    edit,
    cancelEdit,
    update,
    deleteTodo,
    complete,
  }
};
