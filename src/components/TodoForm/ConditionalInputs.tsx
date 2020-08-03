import React from 'react';
import { useFormContext } from 'react-hook-form';
import { NumberInput } from 'components/form';
import { TodoType } from 'state/todos';

const ConditionalInputs: React.FC = () => {
  const { watch } = useFormContext();
  const todoType = watch('type');

  return (
    <>
      {todoType === TodoType.TARGET && (
        <NumberInput name="target" integer />
      )}
    </>
  );
};

export default ConditionalInputs;
