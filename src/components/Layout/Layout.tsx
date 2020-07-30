import React from 'react';
import style from './Layout.style';

export interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div css={style}>
      <div className="header">
        Header
      </div>
      <div className="navigation">
        Navigation
      </div>
      <div className="main">
        {children}
      </div>
    </div>
  )
}

export default Layout;
