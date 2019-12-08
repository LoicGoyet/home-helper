import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled from 'styled-components';
import { MdCheck } from 'react-icons/lib/md';

import COLORS from 'style/colors';
import { getContrastYIQ, alpha } from 'utils/colors';

const Checkbox = ({ isChecked, onChange, ...props }) => (
  // eslint-disable-next-line jsx-a11y/label-has-for
  <Wrapper {...props}>
    <RealInput type="checkbox" onChange={onChange} checked={isChecked} />
    <FakeElement style={getThemeVars({ ...props, isChecked })}>
      <Icon />
    </FakeElement>
  </Wrapper>
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  color: ExtraPropTypes.color /* eslint-disable-line react/no-typos */,
};

Checkbox.defaultProps = {
  onChange: () => undefined,
  isChecked: false,
  color: COLORS.white,
};

export default React.memo(Checkbox);

const getThemeVars = ({ isChecked, color }) => ({
  '--size': '1rem',
  '--border-color': color,
  '--color': isChecked ? getContrastYIQ(color) : COLORS.transparent,
  '--bg-color': isChecked ? color : COLORS.transparent,
  '--box-shadow--focus': `0 0 0 4px ${alpha(color, 0.4)}`,
});

const Wrapper = styled.label`
  display: inline-flex;
  position: relative;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
`;

const RealInput = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  opacity: 0;
`;

const FakeElement = styled.span`
  font-size: var(--size);
  height: 1.5rem;
  width: 1.5rem;
  border: 2px solid var(--border-color);
  display: inline-flex;
  border-radius: 3px;
  background-color: var(--bg-color);
  color: var(--color);
  padding: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:focus {
    outline-width: 0;
    box-shadow: var(--box-shadow--focus);
  }
`;

const Icon = styled(MdCheck)`
  font-size: 1em;
`;
