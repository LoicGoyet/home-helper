import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RecipeCard from '../RecipeCard';

class RecipesList extends React.Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    isDone: PropTypes.bool,
  };

  static defaultProps = {
    isDone: false,
  };

  state = {
    activeItem: -1,
  };

  get themeVars() {
    return {
      '--opacity': this.props.isDone ? '0.6' : 'initial',
    };
  }

  toggleItemFocus(index) {
    const isAlreadyFocused = index === this.state.activeItem;
    return this.setState({
      activeItem: isAlreadyFocused ? -1 : index,
    });
  }

  render() {
    const { recipes } = this.props;
    const { activeItem } = this.state;

    return (
      <Wrapper style={this.themeVars}>
        {recipes.map((recipe, index) => {
          const isOpen = activeItem === index;
          let theme = {};

          if (isOpen) {
            theme = {
              ...theme,
              '--border-color': 'transparent',
            };
          }

          return (
            <Item
              key={recipe.title}
              onClick={() => this.toggleItemFocus(index)}
              isOpen={isOpen}
              theme={theme}
              {...recipe}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default RecipesList;

const Wrapper = styled.section`
  margin-bottom: 1rem;
  opacity: var(--opacity);
`;

const Item = styled(RecipeCard)`
  &:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: var(--border-color);
    transition: background-color var(--transition);
  }

  &:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
