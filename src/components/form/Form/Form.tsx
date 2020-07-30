import React, { useCallback } from 'react';
import {
  useForm,
  FormContext,
  UseFormOptions,
  FieldErrors,
} from 'react-hook-form';
import { SubmitFunc } from './types';

export interface FormProps<T> extends UseFormOptions<T> {
  /**
   * Form children
   */
  children?: React.ReactNode;
  /**
   * Submit handler
   * passed values and files object
   */
  onSubmit?: SubmitFunc<T>,
  /**
   * Validate function
   * Accepts async validation functions as well
   */
  validate?: (values: T) => FieldErrors<T> | Promise<FieldErrors<T>>
}

/**
 * Form wrapper component.
 * Provides context for child components
 * TODO: Unsure if we actually want to go this route...
 */
const Form = <T,>({
  children,
  onSubmit = () => {},
  validate,
  ...options
}: FormProps<T>) => {
  const validationResolver = useCallback((values: T) => {
    const errors = validate ? validate(values) : {};
    const hasError = Object.keys(errors).length > 0;

    return {
      errors,
      values: hasError ? {} : values,
    }
  }, [validate]);
  const methods = useForm<T>({ validationResolver, ...options });
  const submitFunc = useCallback(async (values: T) => {
    await onSubmit(values);
  }, [onSubmit]);

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(submitFunc)}>
        {children}
      </form>
    </FormContext>
  )
}

export default Form;
