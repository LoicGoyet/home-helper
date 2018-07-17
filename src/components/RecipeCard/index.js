import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';

import { strToColor, alpha } from '../../utils/colors';
import COLORS from '../../style/colors';
import Tags from '../Tags';
import Card from '../Card';
import Pill from '../Pill';
import IngredientsList from '../IngredientsList';

export default class RecipeCard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    mainBtn: PropTypes.node,
    actionRow: PropTypes.node,
    isReadyToCook: PropTypes.bool,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        quantityUnit: PropTypes.string.isRequired,
      })
    ),
  };

  static defaultProps = {
    isOpen: false,
    tags: [],
    className: '',
    onClick: undefined,
    theme: {},
    mainBtn: undefined,
    actionRow: undefined,
    ingredients: undefined,
    isReadyToCook: undefined,
  };

  get accentColor() {
    const { title } = this.props;
    return strToColor(title);
  }

  get themeVars() {
    const { isOpen, theme } = this.props;
    const isOpenBoxShadow = `0 11px 15px -7px ${alpha(COLORS.black, 0.2)}, 0 24px 38px 3px ${alpha(COLORS.black, 0.14)},
    0 9px 46px 8px ${alpha(COLORS.black, 0.12)}`;

    return {
      '--border-color': COLORS.lightgray,
      '--transition': '300ms ease-in-out',
      '--box-shadow': isOpen ? isOpenBoxShadow : 'none',
      '--z-index': isOpen ? '1' : 'initial',
      ...theme,
    };
  }

  renderReadyPill() {
    const { isReadyToCook } = this.props;
    if (isReadyToCook === undefined) return false;

    const color = isReadyToCook ? COLORS.blue : COLORS.red;
    const title = isReadyToCook ? 'prêt à être cuisiné' : 'il manque des ingrédients';

    return <ReadyPill color={color}>{title}</ReadyPill>;
  }

  render() {
    const { title, isOpen, tags, className, onClick, mainBtn, actionRow, ingredients } = this.props;

    return (
      <Wrapper
        isOpen={isOpen}
        className={className}
        accentColor={this.accentColor}
        onClick={onClick}
        style={this.themeVars}
      >
        <Row>
          <div>
            <TitleRow>
              <Title>{title}</Title>
            </TitleRow>
            {tags.length > 0 && <RecipeTags items={tags} />}
            {this.renderReadyPill()}
          </div>

          {mainBtn}
        </Row>

        <AnimateHeight height={isOpen ? 'auto' : 0}>
          {actionRow !== undefined && <ActionRow>{actionRow}</ActionRow>}
          {ingredients !== undefined && <RecipeIngredientsList ingredients={ingredients} />}
        </AnimateHeight>
      </Wrapper>
    );
  }
}

const Wrapper = styled(Card)`
  position: relative;
  transition: box-shadow var(--transition);
  box-shadow: var(--box-shadow);
  z-index: var(--z-index);
  overflow: hidden;
`;

const TitleRow = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: 0;
  margin-right: 1em;
`;

const RecipeTags = styled(Tags)`
  margin-top: 0.3rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionRow = styled.div`
  display: flex;
  margin: 0.5rem -1rem -1rem;
  padding-bottom: 0.5rem;
`;

const RecipeIngredientsList = styled(IngredientsList)`
  margin-top: 0.5rem;
`;

const ReadyPill = styled(Pill)`
  margin-top: 0.5rem;
  font-size: 0.66em;
`;
