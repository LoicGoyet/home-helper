import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Container from 'components/Container';
import TodosList from 'containers/todos/TodosList';
import AddTask from 'containers/todos/AddTask';

const Todos = () => (
  <React.Fragment>
    <Helmet>
      <title>Liste de course - Home helper</title>
    </Helmet>

    <Container>
      <AddTaskForm />
      <TodosList />
    </Container>
  </React.Fragment>
);

export default Todos;

const AddTaskForm = styled(AddTask)`
  position: sticky;
  top: 1rem;
  margin: 0 0 2rem;
  z-index: 1;
`;
