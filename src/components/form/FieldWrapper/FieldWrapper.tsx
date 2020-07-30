import React from 'react';
import { IFieldWrapperProps as IFieldWrapperBaseProps } from '../FieldProps.interface';
import style from './FieldWrapper.style';

export interface IFieldWrapperProps extends IFieldWrapperBaseProps {
  children: React.ReactNode;
}

const FieldWrapper: React.FC<IFieldWrapperProps> = ({
  children,
  name,
  label,
  // required,
  error,
}) => {
  return (
    <div css={style} className="field-wrapper">
      <div>
        {label && (
          <label htmlFor={name}>{label}</label>
        )}
      </div>
      <div>
        {children}
      </div>
      <div>
        {error && (
          <div>{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default FieldWrapper;