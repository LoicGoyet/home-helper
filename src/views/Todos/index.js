import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import TodosList from '../../container/TodosList';
import AddTask from '../../container/AddTask';

const Todos = () => (
  <React.Fragment>
    <Helmet>
      <title>Liste de course - Home helper</title>
    </Helmet>

    <AddTaskForm />
    <TodosList />
  </React.Fragment>
);

export default Todos;

const AddTaskForm = styled(AddTask)`
  position: sticky;
  top: 1rem;
  margin: 0 0 2rem;
  z-index: 1;
`;
