import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'components';
import Todo from 'components/Todo/Todo';
import AddTodo from 'components/AddTodo/AddTodo';
import { RootState } from 'state-types';
import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

const style = (theme: Theme): CSSObject => ({
  paddingTop: theme.padding.global,
});

const HomePage = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

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
        {/* TODO: Conditionally render based on editing */}
        <AddTodo />
      </div>
    </Container>
  )
};

export default HomePage;
