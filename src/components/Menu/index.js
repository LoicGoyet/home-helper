import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

import Container from 'components/Container';
import Card from 'components/Card';
import Plan from 'components/Plan';

const Menu = ({ items }) => {
  const style = {
    '--opacity': 0.55,
    '--scale': 0.8,
    '--opacity-active': 0.55,
    '--scale-active': 1,
  };

  const activeStyle = {
    '--opacity': 1,
    '--scale': 1,
    '--opacity-active': 1,
    '--scale-active': 1,
  };

  return (
    <Plan level={1000}>
      <WrapperContainer>
        <Wrapper>
          {items.map(({ path, label, icon, counter }) => {
            const Icon = icon;

            return (
              <Link key={`${path} / ${label}`} to={path} style={style} activeStyle={activeStyle}>
                <InnerLink>
                  <Icon size={26} />
                  <span>{label}</span>
                  {!!counter && <Counter as={counter} />}
                </InnerLink>
              </Link>
            );
          })}
        </Wrapper>
      </WrapperContainer>
      <Placeholder />
    </Plan>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
      counter: PropTypes.any,
    })
  ).isRequired,
};

export default withRouter(Menu);

const height = 3.75;
const margin = 0.35;

const WrapperContainer = styled(Container).attrs({
  maxWidth: '36rem',
})`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  z-index: 1000;
`;

const Wrapper = styled(Card)`
  display: flex;
  margin: ${margin}rem;
  height: ${height}rem;
  z-index: 10;
  /* background-color: ${props => props.theme.colors.violet}; */
`;

const Link = styled(NavLink)`
  flex-grow: 1;
  text-align: center;
  text-decoration: none;
  font-size: 0.65rem;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  position: relative;
  border-radius: ${props => props.theme.radius};
  transition: all ease-in-out 250ms;
`;

const InnerLink = styled.span`
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  will-change: transform;
  transform: translate3d(0, 0, 0) translate(-50%, -50%) scale(var(--scale));
  opacity: var(--opacity);
  transition: all 250ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* stylelint-disable */
  ${Link}:hover &,
  ${Link}:focus & {
    transform: translate3d(0, 0, 0) translate(-50%, -50%) scale(var(--scale-active));
    opacity: var(--opacity-active);
  }
  /* stylelint-enable */
`;

const Placeholder = styled.div`
  height: ${height + margin * 2}rem;
`;

const Counter = styled.span`
  position: absolute;
  bottom: 29%;
  right: 12%;
`;
