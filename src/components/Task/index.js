import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Task extends React.Component {
  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
    toggleTask: PropTypes.func.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  constructor(props) {
    super(props);
    this.toggleTask = this.toggleTask.bind(this);
  }

  get themeVars() {
    const { task, style } = this.props;

    return {
      '--text-decoration': task.done ? 'line-through red' : 'initial',
      ...style,
    };
  }

  toggleTask() {
    return this.props.toggleTask();
  }

  render() {
    const { title } = this.props.task;

    return (
      <Wrapper style={this.themeVars} onClick={this.toggleTask}>
        {title}
      </Wrapper>
    );
  }
}

export default Task;

const Wrapper = styled.div`
  text-decoration: var(--text-decoration);
`;
