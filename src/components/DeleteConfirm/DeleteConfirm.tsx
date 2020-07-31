import React, { useCallback } from 'react';
import Button from '../Button/Button';
import style from './DeleteConfirm.style';

export interface IDeleteConfirmProps {
  children: React.ReactNode;
  message?: string;
  onClick: () => void;
}

const DeleteConfirm: React.FC<IDeleteConfirmProps> = ({
  children,
  message = 'Confirm delete?',
  onClick,
  ...rest
}) => {
  const confirmDelete = useCallback(() => {
    window.confirm(message) && onClick();
  }, [message, onClick]);

  return (
    <Button css={style} onClick={confirmDelete} {...rest}>
      {children}
    </Button>
  );
};

export default DeleteConfirm;
