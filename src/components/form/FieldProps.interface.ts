import { FieldError } from 'react-hook-form';

/**
 * Props for FieldWrapper component
 */
export interface IFieldWrapperProps {
  name: string;
  label?: string;
  error?: FieldError;
  required?: boolean;
}

/**
 * All form fields will use these props
 */
export interface IFieldProps extends IFieldWrapperProps {
  // Any other props go here?
}
