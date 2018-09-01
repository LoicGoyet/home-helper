import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardsAccordion, { CardsAccordionItem } from '../CardsAccordion';
import Tags from '../Tags';
import Button from '../Button';
import IngredientsList from '../IngredientsList';
import COLORS from '../../style/colors';

class RecipesCollection extends React.Component {
  static propTypes = {
    collection: PropTypes.object.isRequired,
    addItem: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  static defaultProps = {
    addItem: () => undefined,
  };

  onAddBtnClick = (event, id) => {
    event.stopPropagation();
    this.props.addItem(id);
  };

  render = () => (
    <CardsAccordion className={this.props.className}>
      {this.props.collection.allIds.map(id => {
        const item = this.props.collection.byId[id];

        return (
          <CardsAccordionItem
            key={id}
            header={() => (
              <Header>
                <HeaderContent>
                  <Title>{item.title}</Title>
                  <RecipeTags items={item.tags} />
                </HeaderContent>

                <AddButton color={COLORS.violet} block onClick={e => this.onAddBtnClick(e, id)}>
                  Ajouter
                </AddButton>
              </Header>
            )}
          >
            <IngredientsList ingredients={item.ingredients} />
          </CardsAccordionItem>
        );
      })}
    </CardsAccordion>
  );
}

export default RecipesCollection;

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

const AddButton = styled(Button).attrs({
  color: COLORS.violet,
  block: true,
})`
  flex-shrink: 0;
`;
