import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Accordion, { AccordionItem } from 'components/Accordion';
import Button from 'components/Button';
import IngredientsList from 'components/IngredientsList';
import COLORS from 'style/colors';

const RecipesCollectionComponent = ({ onAddItem, collection, getEditHref, ...props }) => {
  const onAddBtnClick = id => event => {
    event.stopPropagation();
    onAddItem(id);
  };

  return (
    <Accordion {...props}>
      {collection.allIds.map(id => {
        const item = collection.byId[id];

        return (
          <AccordionItem
            key={id}
            header={() => (
              <Header>
                <HeaderContent>
                  <Title>{item.title}</Title>
                </HeaderContent>

                <AddButton onClick={onAddBtnClick(id)}>Ajouter</AddButton>
              </Header>
            )}
          >
            <Ingredients ingredients={item.ingredients} />

            <div>
              <Button color={COLORS.blue} href={getEditHref(id)}>
                Modifier
              </Button>

              {!!item.link && (
                <Button color={COLORS.green} exthref={item.link} target="_blank">
                  Voir la recette
                </Button>
              )}
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

RecipesCollectionComponent.propTypes = {
  collection: PropTypes.object.isRequired,
  onAddItem: PropTypes.func,
  getEditHref: PropTypes.func,
  className: PropTypes.string,
};

RecipesCollectionComponent.defaultProps = {
  className: undefined,
  onAddItem: () => undefined,
  getEditHref: () => undefined,
};

export default RecipesCollectionComponent;

const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  font-size: 1.25rem;
  letter-spacing: 0.0125em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 28rem) {
    font-size: 1rem;
    letter-spacing: initial;
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

const AddButton = styled(Button).attrs({
  color: COLORS.white,
  isBlock: true,
})`
  flex-shrink: 0;
`;

const Ingredients = styled(IngredientsList)`
  margin-bottom: 1rem;
`;
