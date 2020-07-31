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
      {type === TodoType.MULTIPLE && (
        <div className={cx('multiple', { complete: completed > 0})}>
          {completed < 6 ? Array.from({ length: completed }).map(idx => (
            <div className="icon check complete">
              <FaCheckCircle />
            </div>
          ))
          : (
            <>
              <div className="count icon check complete">{completed}</div>
              <div className="icon check complete">
                <FaCheckCircle />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoComplete;
