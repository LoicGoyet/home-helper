import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Container from '../Container';
import COLORS from '../../style/colors';
import { darken } from '../../utils/colors';

const Layout = ({ children, menu }) => (
  <Wrapper>
    <main>{children}</main>

    <Menu>
      {menu.map(({ path, label, icon }) => {
        const Icon = icon;

        return (
          <MenuLink
            key={`${path} / ${label}`}
            to={path}
            style={{
              '--background-color': COLORS.white,
              '--color': COLORS.violet,
              '--background-color-hover': darken(COLORS.white, 0.1),
            }}
            activeStyle={{
              '--background-color': COLORS.violet,
              '--color': COLORS.white,
              '--background-color-hover': COLORS.violet,
            }}
          >
            <Icon size={20} />
            <MenuLinkLabel>{label}</MenuLinkLabel>
          </MenuLink>
        );
      })}
    </Menu>

    <MenuPlaceholder />
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    })
  ).isRequired,
};

Layout.defaultProps = {
  children: undefined,
};

export default Layout;

const Wrapper = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Menu = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 2px;
  height: 60px;
`;

const MenuLink = styled(NavLink)`
  width: ${100 / 3}%;
  padding: 0.5rem;
  text-align: center;
  background-color: var(--background-color);
  color: var(--color);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: bold;
  letter-spacing: 0.15em;
  cursor: pointer;
  margin-left: 2px;
  margin-right: 2px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 300ms ease-in-out;
  transition-property: box-shadow, transform;

  &:first-child {
    margin-left: 0;
    margin-right: 0;
  }

  &:last-child {
    margin-left: 0;
    margin-right: 0;
  }

  &:hover {
    background-color: var(--background-color-hover);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.23), 0 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

const MenuLinkLabel = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: 0.25rem;
`;

const MenuPlaceholder = styled.div`
  height: 60px;
`;
