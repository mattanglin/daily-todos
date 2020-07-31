import React from 'react';
import style from './ManageTodo.style';

export interface IManageTodoProps {
  children: React.ReactNode;
}

const ManageTodo: React.FC<IManageTodoProps> = ({ children }) => {
  return (
    <div css={style}>
      {children}
    </div>
  );
};

export default ManageTodo;
