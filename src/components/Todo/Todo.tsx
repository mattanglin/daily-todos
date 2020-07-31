import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'state/todos';
import style from './Todo.style';
import { ITodo } from 'state/todos';

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
  title,
  todoDone,
}) => {
  const dispatch = useDispatch();
  const doTodo = useCallback(() => {
    dispatch(actions.doTodo(index));
  }, [index, dispatch])

  return (
    <div css={style} className="todo" onClick={doTodo}>
      TODO: {title}
      {todoDone > 0 && (
        <div>{todoDone}</div>
      )}
    </div>
  );
};

export default Todo;
