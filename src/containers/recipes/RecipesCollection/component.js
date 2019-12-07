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

                <AddButton color={COLORS.violet} isBlock onClick={onAddBtnClick(id)}>
                  Ajouter
                </AddButton>
              </Header>
            )}
          >
            <DetailRow>
              <IngredientCol>
                <IngredientsList ingredients={item.ingredients} />
              </IngredientCol>

              <EditButtonCol>
                <Button color={COLORS.blue} isBlock href={getEditHref(id)}>
                  Modifier
                </Button>
              </EditButtonCol>
            </DetailRow>
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
  color: COLORS.violet,
  isBlock: true,
})`
  flex-shrink: 0;
`;

const DetailRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  margin-top: -1rem;
`;

const IngredientCol = styled.div`
  flex-grow: 1;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
  flex-basis: 28rem;
`;

const EditButtonCol = styled.div`
  flex-shrink: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
`;
