import React from 'react';
import { useFormContext } from 'react-hook-form';
import style from './SubmitButton.style';

/**
 * TODO: Custom loading component?
 */
const SubmitButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  const {
    formState: {
      dirty,
      isSubmitting,
    }
  } = useFormContext();

  return (
    <button {...rest} css={style} type="submit" disabled={!dirty}>
      {isSubmitting ? '...' : children}
    </button>
  );
}

export default SubmitButton;