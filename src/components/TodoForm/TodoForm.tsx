import React from 'react';
import { ITodo } from 'state/todos';
import { Button } from 'components';
import { Form, Input, SubmitButton } from 'components/form';
import style, { cancelBtnStyle} from './TodoForm.style';
import { DeepPartial } from 'react-hook-form';

type FormValues = Omit<ITodo, 'todoDone'>;

export interface ITodoFormProps {
  onSubmit?: (values: FormValues) => void;
  onCancel?: () => void;
  defaultValues?: DeepPartial<FormValues>;
}

const TodoForm: React.FC<ITodoFormProps> = ({
  defaultValues,
  onCancel,
  onSubmit,
}) => {
  return (
    <div css={style}>
      {/* TODO: style. have inputs wrapped like todo, but submit/cancel underneath */}
      <Form<FormValues>
        defaultValues={defaultValues}
        onSubmit={onSubmit}
      >
        {/* TODO: change to select */}
        <Input name="type" type="hidden" />
        <Input name="title" placeholder="Todo Title" />
        <div className="actions">
          <Button onClick={onCancel} css={cancelBtnStyle}>
            Cancel
          </Button>
          <SubmitButton>
            Save
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
};

export default TodoForm;
