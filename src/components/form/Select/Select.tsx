import React from 'react';
import { useFormContext } from 'react-hook-form';
import FieldWrapper from '../FieldWrapper/FieldWrapper';
import { IFieldWrapperProps } from '../FieldProps.interface';
import style from './Select.style';

// TODO: objects and strings
interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectProps extends Omit<React.HTMLProps<HTMLSelectElement>, 'name'>, IFieldWrapperProps {
  // TODO: Other Props?
  options: Array<ISelectOption>
}


const Select: React.FC<ISelectProps> = ({
  name,
  options,
  ...rest
}) => {
  const { register, errors } = useFormContext();
  const error = errors[name!];
  // Do other stuff...

  return (
    <FieldWrapper name={name} label={rest.label} required={rest.required} error={error}>
      <select css={style} name={name} id={name} ref={register}>
        {options.map(({ label, value }, idx) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};

export default Select;
