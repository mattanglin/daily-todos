import { FieldError } from 'react-hook-form';

export const fieldError = (
  message: string,
  options: Omit<FieldError, 'message'> = {
    type: 'validateError',
    isManual: true,
  }
): FieldError => ({
  message,
  type: options.type,
  ref: options.ref,
  types: options.types,
  isManual: options.isManual,
});
