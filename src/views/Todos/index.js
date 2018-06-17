import React from 'react';
import styled from 'styled-components';

import TodosList from '../../container/TodosList';
import AddTask from '../../container/AddTask';
import Container from '../../components/Container';

const Todos = () => (
  <Wrapper>
    <AddTaskWrapper>
      <Container>
        <AddTask />
      </Container>
    </AddTaskWrapper>

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
  padding-top: 4.125rem;
`;

const AddTaskWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 1rem 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
