import React from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';

import Card from '../Card';
import { alpha } from '../../utils/colors';
import COLORS from '../../style/colors';

class CardsAccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  onHeaderKeyPress = ({ charCode }) => {
    if (charCode === 13 || charCode === 32) return this.props.toggle();
  };

  onHeaderClick = () => {
    this.header.current.blur();
    return this.props.toggle();
  };

  get themeVars() {
    const isOpenBoxShadow = `0 11px 15px -7px ${alpha(COLORS.black, 0.2)}, 0 24px 38px 3px ${alpha(COLORS.black, 0.14)},
        0 9px 46px 8px ${alpha(COLORS.black, 0.12)}`;

    return {
      '--box-shadow': this.props.isOpen ? isOpenBoxShadow : 'none',
      '--z-index': this.props.isOpen ? '1' : 'initial',
    };
  }

  render() {
    const { isOpen, children, header } = this.props;

    return (
      <Wrapper style={this.themeVars}>
        <Header innerRef={this.header} onClick={this.onHeaderClick} onKeyPress={this.onHeaderKeyPress} tabIndex="0">
          {header()}
        </Header>

        <AnimateHeight height={isOpen ? 'auto' : 0}>
          <Body>{children}</Body>
        </AnimateHeight>
      </Wrapper>
    );
  }
}

CardsAccordionItem.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.node,
  header: PropTypes.func.isRequired,
};

CardsAccordionItem.defaultProps = {
  isOpen: false,
  toggle: () => undefined,
  children: undefined,
};

export default CardsAccordionItem;

const Wrapper = styled(Card)`
  position: relative;
  box-shadow: var(--box-shadow);
  z-index: var(--z-index);
  transition: all 200ms ease-in-out;
  user-select: none;

  /* &:focus-within {
    z-index: 2;
  } */

  & + & {
    margin-top: 1px;
  }
`;

const Header = styled.header`
  margin: -1rem;
  padding: 1rem;
  cursor: pointer;

  &:focus {
    outline: 0;
    position: relative;
    z-index: 1;

    &:not(:active) {
      box-shadow: 0 0 0 3px ${COLORS.blue};
    }
  }
`;

const Body = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${COLORS.lightgray};
`;
