import React from 'react';
import styled from 'styled-components';

import TodosList from '../../container/TodosList';
import AddTask from '../../container/AddTask';
import Container from '../../components/Container';

const Todos = () => (
  <Wrapper>
    <TodosList />
    <AddTask />
  </Wrapper>
);

Todos.defaultProps = {
  children: undefined,
};

export default Todos;

const Wrapper = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
