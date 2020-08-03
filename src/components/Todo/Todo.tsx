import React from 'react';
import { ITodo } from 'state/todos';
import { FaEdit, FaEraser, FaTimes } from 'react-icons/fa';
import { Button, DeleteConfirm } from 'components';
import TodoForm from 'components/TodoForm/TodoForm';
import { useTodo, TodoDisplay } from './useTodo';
import TodoComplete from './TodoComplete';
import style, { deleteBtn, resetBtn } from './Todo.style';

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
    target,
    display,
    complete,
    edit,
    cancelEdit,
    update,
    deleteTodo,
    resetTodo,
  } = useTodo(index);

  // Condtionally display depending on manage/edit status
  return (
    <div className="todo" css={style}>
      {display === TodoDisplay.VIEW && (
        <div className="inner view" onClick={complete}>
          <div className="title">{title}</div>
          <TodoComplete
            title={title}
            type={type}
            completed={completed}
            target={target}
          />
        </div>
      )}
      {display === TodoDisplay.MANAGE && (
        <div className="inner manage">
          <div className="title">{title}</div>
          <div className="actions">
            <DeleteConfirm onClick={deleteTodo} css={deleteBtn} message={`Delete "${title}" todo?`}>
              <FaTimes />
            </DeleteConfirm>
            <DeleteConfirm onClick={resetTodo} css={resetBtn} message={`Reset "${title}" todo?`}>
              <FaEraser />
            </DeleteConfirm>
            <Button onClick={edit}>
              <FaEdit />
            </Button>
          </div>
        </div>
      )}
      {display === TodoDisplay.EDIT && (
        <TodoForm
          onSubmit={update}
          onCancel={cancelEdit}
          defaultValues={{ title, type, target }}
        />
      )}
    </div>
  );
};

export default Todo;
