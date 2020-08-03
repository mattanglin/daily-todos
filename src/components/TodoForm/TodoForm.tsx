import React from 'react';
import { ITodo, TodoType } from 'state/todos';
import { Button } from 'components';
import {
  Form,
  Input,
  Select,
  SubmitButton
} from 'components/form';
import ConditionalInputs from './ConditionalInputs';
import style, { cancelBtnStyle} from './TodoForm.style';
import { DeepPartial } from 'react-hook-form';

type FormValues = Omit<ITodo, 'completed'>;

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
        <div className="inner form">
          {/* TODO: change to select */}
          <div className="title">
            <Input name="title" placeholder="Todo Title" />
          </div>
          <div className="content">
            <Select
              name="type"
              options={[
                { value: TodoType.BASIC, label: 'Basic Todo' },
                { value: TodoType.MULTIPLE, label: 'Multiple Todo' },
                { value: TodoType.TARGET, label: 'Target Count Todo' },
              ]}
            />
            <ConditionalInputs />
          </div>
        </div>
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
