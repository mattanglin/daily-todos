 /**
  * Function to determine whether a value isEmpty or not.
  * Returns true iff undefined or null
  */
export const isEmpty = (value: any): boolean => value === null || value === undefined;

/**
 * Recursive function to clean null/undefined values
 * TODO: We could pass isEmptyValidator as param...
 */
export const deepClean = <T>(values: T): T => {
  // Clean arrays
  if (Array.isArray(values)) {
    return values.reduce((cleanedArray, value) => {
      const cleanedValue = deepClean(value);

      if (!isEmpty(cleanedValue)) {
        return [...cleanedArray, cleanedValue];
      }
      return cleanedArray;
    }, [] as T[]);
  }

  // Clean objects
  if (values !== null && typeof values === 'object') {
    const valuesObj = values as { [key:string]: any };
    return Object.keys(valuesObj).reduce((cleanedObj, key) => {
      const cleanedValue = deepClean(valuesObj[key] as any);

      if (!isEmpty(cleanedValue)) {
        return {
          ...cleanedObj,
          [key]: cleanedValue,
        }
      }
      return cleanedObj;
    }, {} as T);
  }

  // Pass all other values through
  return values;
}
