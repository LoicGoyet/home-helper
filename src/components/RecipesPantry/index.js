import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Accordion, { AccordionItem } from '../Accordion';
import Tags from '../Tags';
import CheckButton from '../CheckButton';
import IngredientsList from '../IngredientsList';

class RecipesCollection extends React.Component {
  static propTypes = {
    pantry: PropTypes.object.isRequired,
    toggleItem: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  static defaultProps = {
    toggleItem: () => undefined,
  };

  onCheckboxChange = id => {
    this.props.toggleItem(id);
  };

  render = () => (
    <Accordion className={this.props.className}>
      {this.props.pantry.allIds.map(id => {
        const item = this.props.pantry.byId[id];

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

                <PantryCheckbox
                  isChecked={!item.available}
                  onClick={e => {
                    e.stopPropagation();
                    this.onCheckboxChange(id);
                  }}
                />
              </Header>
            )}
          >
            <IngredientsList ingredients={item.ingredients} />
          </CardItem>
        );
      })}
    </Accordion>
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

const CardItem = styled(AccordionItem)`
  opacity: var(--opacity);
`;

const PantryCheckbox = styled(CheckButton)`
  flex-shrink: 0;
`;
