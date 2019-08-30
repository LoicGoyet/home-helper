import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Accordion, { AccordionItem } from 'components/Accordion';
import Tags from 'components/Tags';
import CheckButton from 'components/CheckButton';
import IngredientsList from 'components/IngredientsList';

const RecipesCollection = ({ pantry, onItemClick, ...props }) => {
  const onCheckboxClick = useCallback(
    id => e => {
      e.stopPropagation();
      return onItemClick(id);
    },
    [onItemClick]
  );

  return (
    <Accordion {...props}>
      {pantry.allIds.map(id => {
        const item = pantry.byId[id];

        return (
          <CardItem
            key={id}
            style={{
              '--opacity': item.available ? '1' : '0.5',
            }}
            header={() => (
              <Header>
                <HeaderContent>
                  <Title>{item.title}</Title>
                  <RecipeTags items={item.tags} />
                </HeaderContent>

                <PantryCheckbox isChecked={!item.available} onClick={onCheckboxClick(id)} />
              </Header>
            )}
          >
            <IngredientsList ingredients={item.ingredients} />
          </CardItem>
        );
      })}
    </Accordion>
  );
};

RecipesCollection.propTypes = {
  pantry: PropTypes.object.isRequired,
  onItemClick: PropTypes.func,
  className: PropTypes.string,
};

RecipesCollection.defaultProps = {
  className: undefined,
  onItemClick: () => undefined,
};

export default React.memo(RecipesCollection);

const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  font-size: 1.25rem;
  letter-spacing: 0.0125em;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 28rem) {
    font-size: 1rem;
    letter-spacing: initial;
    margin-bottom: 0.25rem;
  }
`;

const RecipeTags = styled(Tags)`
  @media (max-width: 28rem) {
    font-size: 0.75rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  padding-right: 1rem;
  width: 100%;
  min-width: 0;
`;

const CardItem = styled(AccordionItem)`
  opacity: var(--opacity);
`;

const PantryCheckbox = styled(CheckButton)`
  flex-shrink: 0;
`;
