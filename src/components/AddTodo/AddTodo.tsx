import React, { useState, useCallback } from 'react';
import { Button } from 'components';
import TodoForm from 'components/TodoForm/TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { ITodo, TodoType, actions, selectors } from 'state/todos';
import style, { addBtnStyle } from './AddTodo.style';

type FormValues = Omit<ITodo, 'completed'>;

/**
 * AddTodo button/form
 */
const AddTodo: React.FC = () => {
  const editing = useSelector(selectors.getEditing);
  const disabled = editing !== undefined;

  const dispatch = useDispatch();
  const [isAdding, setAdding] = useState(false);
  const edit = useCallback(() => setAdding(true), [setAdding]);
  const cancel = useCallback(() => setAdding(false), [setAdding]);
  const addNewTodo = useCallback((values: FormValues) => {
    dispatch(actions.addTodo(values));
    setAdding(false);
  }, [dispatch, setAdding]);

  return (
    <div css={style}>
      {(isAdding && !disabled) ? (
        <TodoForm
          defaultValues={{ type: TodoType.BASIC }}
          onSubmit={addNewTodo}
          onCancel={cancel}
        />
      ) : (
        <Button css={addBtnStyle} onClick={edit} disabled={disabled}>
          +
        </Button>
      )}
    </div>
  );
};

export default AddTodo;
