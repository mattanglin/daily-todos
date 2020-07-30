import { setError } from './setError';
import { IMultiValidateFunction } from './types';

export const confirmMatch: IMultiValidateFunction = ([name, match], values, errors, label) => {
  const fieldName = label || name;

  const value = values[name];
  const confirmValue = values[match];

  if (value !== confirmValue) {
    setError(name, errors, `${fieldName} does not match.`);
  }

}