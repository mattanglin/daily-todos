import React from 'react';
import style from './Container.style';

export interface IContainerProps {
  children: React.ReactNode;
}

/**
 * Basic padded container
 */
const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div css={style}>
      {children}
    </div>
  );
};

export default Container;
