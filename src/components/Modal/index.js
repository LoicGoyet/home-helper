import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../style/colors';
import Card from '../Card';

const Modal = ({ toggle, children, isOpen }) => {
  useEffect(
    () => {
      document.body.style.overflow = isOpen ? 'hidden' : null;
    },
    [isOpen]
  );

  const themeVars = useMemo(
    () => ({
      '--scale': isOpen ? 'scale(1)' : 'scale(0.7)',
      '--opacity': isOpen ? 'initial' : 0,
      '--pointer-events': isOpen ? 'initial' : 'none',
      '--backdrop-pointer-events': isOpen ? 'initial' : 'none',
      '--backdrop-opacity': isOpen ? 0.5 : 0,
    }),
    [isOpen]
  );

  return (
    <Wrapper style={themeVars}>
      <Backdrop onClick={toggle} aria-label="close modal" />
      <Content>{children}</Content>
    </Wrapper>
  );
};

Modal.propTypes = {
  // @TODO update the `toggle` prop name
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  isOpen: true,
};

export default React.memo(Modal);

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: auto;
  pointer-events: var(--pointer-events);
`;

const Backdrop = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 0;
  background-color: ${COLORS.black};
  pointer-events: var(--backdrop-pointer-events);
  opacity: var(--backdrop-opacity);
  transition: all 200ms ease-in-out;
  border: 0;
`;

const Content = styled(Card)`
  z-index: 1;
  margin: 1rem auto;
  max-width: 30rem;
  transform: var(--scale);
  transition: all 200ms ease-in-out;
  opacity: var(--opacity);
`;
