import { setError } from './setError';
import { IValidateFunction } from './types';

export const isRequired: IValidateFunction = (name, values, errors, label) => {
  const fieldName = label || name;
  const value = values[name];

  if (!value) {
    setError(name, errors, `${fieldName} is required.`);
  }
}