import React from 'react';
import { useFormContext } from 'react-hook-form';
import FieldWrapper from '../FieldWrapper/FieldWrapper';
import { IFieldWrapperProps } from '../FieldProps.interface';

export interface IInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'name'>, IFieldWrapperProps {
  // TODO: Other Props?
}

const Input: React.FC<IInputProps> = ({ name, ...rest }) => {
  const { register, errors } = useFormContext();
  const error = errors[name!];
  // Do other stuff...

  return (
    <FieldWrapper name={name} label={rest.label} required={rest.required} error={error}>
      <input {...rest} name={name} id={name} ref={register} />
    </FieldWrapper>
  );
}

export default Input;
