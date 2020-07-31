import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from 'state/todos';
import { Form, Input } from 'components/form';
import style from './TodosTitle.style';

type FormValues = {
  title: string;
};

const TodosTitle: React.FC = () => {
  const title = useSelector(selectors.getTitle);
  const isManaging = useSelector(selectors.getManaging);
  const dispatch = useDispatch();
  const updateTitle = useCallback((title) => {
    dispatch(actions.updateTitle(title));
  }, [dispatch]);

  return (
    <h1 css={style}>
      {isManaging ? (
        <Form<FormValues> defaultValues={{ title }} onSubmit={({ title }) => updateTitle(title)}>
          <Input
            name="title"
            placeholder="TODO List Title"
            onBlur={({ target }) => updateTitle(target.value)}
          />
        </Form>
      ) : title}
    </h1>
  );
};

export default TodosTitle;
