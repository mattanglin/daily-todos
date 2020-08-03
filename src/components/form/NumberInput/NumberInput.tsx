import React, { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FieldWrapper from '../FieldWrapper/FieldWrapper';
import { IFieldWrapperProps } from '../FieldProps.interface';

export interface IInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'name'>, IFieldWrapperProps {
  // TODO: Other Props?
  integer?: boolean;
}

const Input: React.FC<IInputProps> = ({ name, integer, ...rest }) => {
  const {
    errors,
    setValue,
    getValues,
    register,
    unregister,
  } = useFormContext();
  const error = errors[name!];
  // Do other stuff...
  const values = getValues();
  const formValue = values[name] as number | undefined;
  const [strValue, setStrValue] = useState(formValue ?? '');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setStrValue(value);
    if (value) {
      const numberValue = integer ? parseInt(value) : parseFloat(value);
      setValue(name, numberValue);
    } else {
      setValue(name, undefined);
    }
  }, [name, setValue, integer]);

  useEffect(() => {
    register({ name, type: 'custom' });
    return () => {
      unregister(name);
    };
  }, [name, register, unregister]);

  return (
    <FieldWrapper name={name} label={rest.label} required={rest.required} error={error}>
      <input
        {...rest}
        name={name}
        id={name}
        type="number"
        onChange={handleChange}
        onBlur={handleChange}
        value={strValue}
      />
    </FieldWrapper>
  );
}

export default Input;
