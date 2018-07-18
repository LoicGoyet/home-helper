import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';
import Tags from '../Tags';

const PantryCount = ({ tags, pantryLength, ...props }) => {
  const tagsKeys = Object.keys(tags);
  const tagsCount = tagsKeys.reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: tags[tag],
    }),
    {}
  );

  return (
    <Wrapper {...props}>
      <Title>Au menu : {pantryLength}</Title>
      {tagsKeys.length > 0 && <Tags items={tagsCount} />}
    </Wrapper>
  );
};

PantryCount.propTypes = {
  tags: PropTypes.object.isRequired,
  pantryLength: PropTypes.number.isRequired,
};

export default PantryCount;

const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 1.15rem;
  margin-right: 0.25rem;
`;
