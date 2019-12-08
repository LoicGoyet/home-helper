import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import styled from 'styled-components';

import Button from 'components/Button';
import Card from 'components/Card';
import Ingredient from 'components/Ingredient';
import COLORS from 'style/colors';

const TodoList = ({ tasks, heading, onTaskClick, limit }) => {
  const [activeLimit, setActiveLimit] = useState(limit);

  const onShowMoreClick = useCallback(
    e => {
      e.preventDefault();
      setActiveLimit(activeLimit + 5);
    },
    [setActiveLimit, activeLimit]
  );

  if (!tasks.allIds.length) return null;

  return (
    <Wrapper>
      <Card>
        {!!heading && <Title>{heading}</Title>}
        {tasks.allIds.map((taskId, index) => {
          if (!!limit && index >= activeLimit) return null;
          const task = R.path(['byId', taskId], tasks);
          return (
            <Task
              key={taskId}
              name={task.product.title}
              quantity={task.quantity}
              unit={task.unit.title}
              isChecked={task.done}
              color={task.product.category.color}
              onChange={() => onTaskClick(task.id)}
            />
          );
        })}
        {tasks.allIds.length > activeLimit && (
          <ShowMoreWrapper>
            <Button color={COLORS.white} onClick={onShowMoreClick}>
              Afficher plus de tâches
            </Button>
          </ShowMoreWrapper>
        )}
      </Card>
    </Wrapper>
  );
};

TodoList.propTypes = {
  limit: PropTypes.number,
  tasks: PropTypes.object.isRequired,
  heading: PropTypes.string,
  onTaskClick: PropTypes.func,
};

TodoList.defaultProps = {
  limit: undefined,
  heading: undefined,
  onTaskClick: () => undefined,
};

export default TodoList;

const Wrapper = styled.section`
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
`;

const ShowMoreWrapper = styled.div`
  margin-top: ${props => props.theme.space};
  text-align: center;
`;

const Task = styled(Ingredient)`
  & + & {
    margin-top: 1rem;
  }
`;
