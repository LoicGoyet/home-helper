import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodosList from '../../container/TodosList';
import AddTask from '../../container/AddTask';
import Container from '../../components/Container';
import * as todos from '../../ducks/todos';
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
      <Wrapper>
        <AddTaskWrapper>
          <Container>
            <AddTask />
          </Container>
        </AddTaskWrapper>

        <TodosList />
      </Wrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

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
