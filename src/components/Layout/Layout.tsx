import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from 'state/todos';
import ManageButton from 'components/ManageButton/ManageButton';
import style from './Layout.style';

export interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const title = useSelector(selectors.getTitle);

  return (
    <div css={style}>
      <div className="header">
        <h1>{title}</h1>
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
