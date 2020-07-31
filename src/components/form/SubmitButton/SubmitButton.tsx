import React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '../../Button/Button';

/**
 * TODO: Custom loading component?
 */
const SubmitButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
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
    <Button {...rest} type="submit" disabled={!dirty}>
      {isSubmitting ? '...' : children}
    </Button>
  );
}

export default SubmitButton;