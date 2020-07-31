import React from 'react';
import cx from 'classnames';
import { TodoType, ITodo } from 'state/todos';
import { FaCheckCircle } from 'react-icons/fa';
import style from './TodoComplete.style';

const TodoComplete: React.FC<ITodo> = ({
  type,
  completed,
}) => {

  return (
    <div css={style}>
      {type === TodoType.BASIC && (
        <div className={cx('icon check', { complete: completed > 0})}>
          <FaCheckCircle />
        </div>
      )}
    </div>
  );
};

export default TodoComplete;
