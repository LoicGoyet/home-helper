import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';
import COLORS from '../../style/colors';

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
      '--text-decoration': task.done ? 'line-through' : 'initial',
      '--opacity': task.done ? 0.5 : 'initial',
      '--checkbox-bg-color': task.done ? 'currentColor' : COLORS.transparent,
      '--checkbox-opacity': task.done ? 0.5 : 'initial',
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
        <FakeCheckbox style={this.themeVars} />
        <Label>{title}</Label>
      </Wrapper>
    );
  }
}

export default Task;

const Wrapper = styled(Card)`
  text-decoration: var(--text-decoration);
  opacity: var(--opacity);
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.lightgray};
  }

  & + & {
    margin-top: 1px;
  }
`;

const FakeCheckbox = styled.span`
  content: '';
  border: 1px solid;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  color: ${COLORS.gray};
  background-color: var(--checkbox-bg-color);
  opacity: var(--checkbox-opacity);
  flex-shrink: 0;
`;

const Label = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  flex-grow: 1;
  min-width: 0;
  overflow: hidden;
`;
