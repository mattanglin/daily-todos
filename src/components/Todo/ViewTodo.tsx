import React from 'react';
import style from './ViewTodo.style';

export interface IViewTodoProps {
  children: React.ReactNode;
}

const ViewTodo: React.FC<IViewTodoProps> = ({ children }) => {
  return (
    <div css={style}>
      {children}
    </div>
  );
};

export default ViewTodo;
