import React, { useState, useCallback } from 'react';
import { Button } from 'components';
import TodoForm from 'components/TodoForm/TodoForm';
import { useDispatch } from 'react-redux';
import { ITodo, TodoType, actions } from 'state/todos';
import style, { addBtnStyle } from './AddTodo.style';

type FormValues = Omit<ITodo, 'todoDone'>;

/**
 * AddTodo button/form
 */
const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const edit = useCallback(() => setEditing(true), [setEditing]);
  const cancel = useCallback(() => setEditing(false), [setEditing]);
  const addNewTodo = useCallback((values: FormValues) => {
    dispatch(actions.addTodo(values));
    setEditing(false);
  }, [dispatch, setEditing]);

  return (
    <div css={style}>
      {isEditing ? (
        <TodoForm
          defaultValues={{ type: TodoType.BASIC }}
          onSubmit={addNewTodo}
          onCancel={cancel}
        />
      ) : (
        <Button css={addBtnStyle} onClick={edit}>
          +
        </Button>
      )}
    </div>
  );
};

export default AddTodo;
