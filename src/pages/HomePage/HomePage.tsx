import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'components';
import Todo from 'components/Todo/Todo';
import AddTodo from 'components/AddTodo/AddTodo';
import { selectors } from 'state/todos';
import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

const style = (theme: Theme): CSSObject => ({
  paddingTop: theme.padding.global,
});

const HomePage = () => {
  const isManaging = useSelector(selectors.getManaging);
  const todos = useSelector(selectors.getTodos);

  return (
    <Container>
      <div css={style} className="todo-list">
        {todos.length === 0 && (
          <div>
            Add Todos Messaging
          </div>
        )}
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} index={index} />
        ))}
        {isManaging && <AddTodo />}
      </div>
    </Container>
  )
};

export default HomePage;
