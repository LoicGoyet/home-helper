import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';
import COLORS from '../../style/colors';

class Task extends React.Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired,
    unit: PropTypes.object.isRequired,
    toggleTask: PropTypes.func,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
    toggleTask: () => undefined,
  };

  constructor(props) {
    super(props);
    this.toggleTask = this.toggleTask.bind(this);
  }

  get isDone() {
    return this.props.task.done;
  }

  get themeVars() {
    const { style } = this.props;

    return {
      '--text-decoration': this.isDone ? 'line-through' : 'initial',
      '--opacity': this.isDone ? 0.5 : 'initial',
      '--checkbox-bg-color': this.isDone ? 'currentColor' : COLORS.transparent,
      '--checkbox-opacity': this.isDone ? 0.5 : 'initial',
      '--category-color': this.props.category.color,
      ...style,
    };
  }

  toggleTask = () => this.props.toggleTask(this.props.task.id);

  render() {
    const { task, product, unit } = this.props;

    return (
      <Wrapper style={this.themeVars} onClick={this.toggleTask}>
        <FakeCheckbox style={this.themeVars} />
        <Label>
          {product.title}
          <Quantity>
            {task.quantity} {unit.title}
          </Quantity>
        </Label>
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
  position: relative;
  padding-left: 1.25rem;

  @media (max-width: 30rem) {
    margin-left: calc(-1rem + 1px);
    margin-right: calc(-1rem + 1px);
  }

  &:hover {
    background-color: ${COLORS.lightgray};
  }

  & + & {
    margin-top: 1px;
  }

  &::before {
    content: '';
    width: 0.25rem;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--category-color);
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

const Quantity = styled.span`
  font-size: 0.8em;
  font-style: italic;
  margin-left: 1em;
`;
