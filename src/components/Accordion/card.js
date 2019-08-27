import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';

import { useAccordion } from 'components/Accordion/context';
import Card from 'components/Card';
import COLORS from 'style/colors';
import { alpha } from 'utils/colors';

const AccordionItem = ({ style, header, className, children, index }) => {
  const [isOpen, toggle] = useAccordion(index);

  const onHeaderKeyPress = useCallback(({ charCode }) => (charCode === 13 || charCode === 32) && toggle(), [toggle]);

  const onHeaderClick = useCallback(
    ({ target }) => {
      target.blur();
      return toggle();
    },
    [toggle]
  );

  const isOpenBoxShadow = `0 11px 15px -7px ${alpha(COLORS.black, 0.2)}, 0 24px 38px 3px ${alpha(COLORS.black, 0.14)},
    0 9px 46px 8px ${alpha(COLORS.black, 0.12)}`;

  const themeVars = {
    '--box-shadow': isOpen ? isOpenBoxShadow : 'none',
    '--z-index': isOpen ? '1' : 'initial',
    ...style,
  };

  return (
    <Wrapper style={themeVars} className={className}>
      <Header onClick={onHeaderClick} onKeyPress={onHeaderKeyPress} tabIndex="0">
        {header()}
      </Header>

      <AnimateHeight height={isOpen ? 'auto' : 0}>
        <Body>{children}</Body>
      </AnimateHeight>
    </Wrapper>
  );
};

AccordionItem.propTypes = {
  header: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

AccordionItem.defaultProps = {
  children: undefined,
  style: {},
  className: undefined,
};

export default React.memo(AccordionItem);

const Wrapper = styled(Card)`
  position: relative;
  box-shadow: var(--box-shadow);
  z-index: var(--z-index);
  transition: all 200ms ease-in-out;
  user-select: none;

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
