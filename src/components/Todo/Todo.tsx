import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from 'state/todos';
import { ITodo } from 'state/todos';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { Button, DeleteConfirm } from 'components';
import TodoForm from 'components/TodoForm/TodoForm';
import { useTodo, TodoDisplay } from './useTodo';
import style from './Todo.style';

export interface ITodoProps extends ITodo {
  index: number;
}

/**
 * Basic Todo item wrapper.
 * Handles basic rendering and functionality.
 * Further todo type behavior is handled by nested components
 */
const Todo: React.FC<ITodoProps> = ({
  index,
}) => {
  const {
    title,
    completed,
    type,
    display,
    complete,
    edit,
    cancelEdit,
    update,
    deleteTodo,
  } = useTodo(index);

  // Condtionally display depending on manage/edit status
  return (
    <div className="todo">
      {display === TodoDisplay.VIEW && (
        <div css={style} onClick={complete}>
          <div className="title">{title}</div>
          <div className="content">
            {completed > 0 && completed}
          </div>
        </div>
      )}
      {display === TodoDisplay.MANAGE && (
        <div css={style}>
          <div className="title">{title}</div>
          <div className="actions">
            <Button onClick={edit}>
              <FaEdit />
            </Button>
            <DeleteConfirm onClick={deleteTodo}>
              <FaTimes />
            </DeleteConfirm>
          </div>
        </div>
      )}
      {display === TodoDisplay.EDIT && (
        <TodoForm
          onSubmit={update}
          onCancel={cancelEdit}
          defaultValues={{ title, type }}
        />
      )}
    </div>
  );
};

export default Todo;
