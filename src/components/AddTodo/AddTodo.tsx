import React, { useState, useCallback } from 'react';
import { Form, Input, SubmitButton } from 'components/form';
import { useDispatch } from 'react-redux';
import { ITodo, TodoType, actions } from 'state/todos';
import style from './AddTodo.style';

type FormValues = Omit<ITodo, 'todoDone'>;

/**
 * AddTodo button/form
 */
const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const addNewTodo = useCallback((values: FormValues) => {
    dispatch(actions.addTodo(values));
    setEditing(false);
  }, [dispatch, setEditing]);

  return (
    <div css={style}>
      {isEditing ? (
        <Form<FormValues>
          defaultValues={{ type: TodoType.BASIC }}
          onSubmit={addNewTodo}
        >
          {/* TODO: change to select */}
          <Input name="type" type="hidden" />
          <Input name="title" placeholder="Todo Title" />
          <SubmitButton>
            Save
          </SubmitButton>
        </Form>
      ) : (
        <button onClick={() => setEditing(true)}>
          +
        </button>
      )}
    </div>
  );
};

export default AddTodo;
