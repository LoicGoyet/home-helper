import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import styled from 'styled-components';

import Task from 'components/Task';
import Button from 'components/Button';
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

  return (
    <Wrapper>
      {!!heading && <Title>{heading}</Title>}

      {tasks.allIds.map((taskId, index) => {
        if (!!limit && index >= activeLimit) return null;
        const task = R.path(['byId', taskId], tasks);
        return <Task key={taskId} task={task} onClick={onTaskClick} />;
      })}

      {tasks.allIds.length > activeLimit && (
        <ShowMoreWrapper>
          <Button color={COLORS.white} isBlock onClick={onShowMoreClick}>
            Afficher plus de tâches
          </Button>
        </ShowMoreWrapper>
      )}
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
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const ShowMoreWrapper = styled.div`
  margin-top: ${props => props.theme.space};
  text-align: center;
`;
