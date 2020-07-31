import React from 'react';
import TodosTitle from 'components/TodosTitle/TodosTitle';
import ManageButton from 'components/ManageButton/ManageButton';
import style from './Layout.style';

export interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div css={style}>
      <div className="header">
        <TodosTitle />
        <div className="settings-btn">
          <ManageButton />
        </div>
      </div>
      <div className="main">
        {children}
      </div>
    </div>
  )
}

export default Layout;
