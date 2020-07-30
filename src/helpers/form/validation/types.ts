import { FieldErrors } from 'react-hook-form';

export interface IValidateFunction {
  <T extends object>(
    name: keyof T,
    values: T,
    errors: FieldErrors<T>,
    label?: string
  ): void
}

export interface IMultiValidateFunction {
  <T extends object>(
    names: Array<keyof T>,
    values: T,
    errors: FieldErrors<T>,
    label?: string
  ): void
}