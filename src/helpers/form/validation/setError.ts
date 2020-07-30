import { FieldErrors, FieldError } from 'react-hook-form';
import { fieldError } from '../fieldError';

/**
 * Helper function to set error messages on error objects
 */
export const setError = <T>(
  name: any,
  errors: FieldErrors<T>,
  message: string,
  options?: Omit<FieldError, 'message'>,
): void => {
  const unErrors = errors as unknown;

  (unErrors as any)[name as string] = fieldError(message, options);
}