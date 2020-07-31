import React from 'react';
import style from './Button.style';

// Basic styled button
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <button type="button" {...rest} css={style}>
      {children}
    </button>
  );
}

export default Button;