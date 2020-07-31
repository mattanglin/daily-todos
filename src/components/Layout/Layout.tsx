import React from 'react';
import { useSelector } from 'react-redux';
import style from './Layout.style';
import { RootState } from 'state-types';

export interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const title = useSelector((state: RootState) => state.todos.title);

  return (
    <div css={style}>
      <div className="header">
        <h1>{title}</h1>
        {/* TODO: Manage Todos toggle */}
      </div>
      <div className="main">
        {children}
      </div>
    </div>
  )
}

export default Layout;
