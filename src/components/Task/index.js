import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Task = props => {
  const { title } = props.task;
  return <Wrapper style={getThemeVars(props)}>{title}</Wrapper>;
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Task;

const getThemeVars = ({ task, style }) => ({
  '--text-decoration': task.done ? 'line-through red' : 'initial',
  ...style,
});

const Wrapper = styled.div`
  text-decoration: var(--text-decoration);
`;
