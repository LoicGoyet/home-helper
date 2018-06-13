import React from 'react';
import styled from 'styled-components';

import TodosList from '../../container/TodosList';
import AddTask from '../../container/AddTask';
import Container from '../../components/Container';

const Todos = () => (
  <Wrapper>
    <AddTask />
    <TodosList />
  </Wrapper>
);

Todos.defaultProps = {
  children: undefined,
};

export default Todos;

const Wrapper = styled(Container)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
