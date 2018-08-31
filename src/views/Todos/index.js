import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodosList from '../../container/TodosList';
import AddTask from '../../container/AddTask';
import * as todos from '../../ducks/todos/tasks';
import Config from '../../config';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todos.fetch()),
});

class Todos extends React.Component {
  static propTypes = {
    fetchTodos: PropTypes.func.isRequired,
  };

  componentWillMount() {
    if (Config.USE_MOCK) return;
    this.props.fetchTodos();
  }

  render() {
    return (
      <React.Fragment>
        <AddTaskForm />
        <TodosList />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

const AddTaskForm = styled(AddTask)`
  position: sticky;
  top: 1rem;
  margin: 0 0 2rem;
  z-index: 1;
`;
