import React from 'react';
import styled from 'styled-components';

import TodosList from '../../container/TodosList';
import Container from '../../components/Container';

const Todos = () => (
  <Wrapper>
    <TodosList />
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
