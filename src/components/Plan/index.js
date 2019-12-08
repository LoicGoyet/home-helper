import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, ThemeContext } from 'styled-components';
import * as R from 'ramda';

const levelLens = R.lensPath(['plans', 'level']);

export const PlanProvider = ({ properties, children }) => {
  const theme = {
    plans: {
      ...properties,
      level: 0,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>{children}</React.Fragment>
    </ThemeProvider>
  );
};

PlanProvider.propTypes = {
  properties: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])))
    .isRequired,
  children: PropTypes.any.isRequired,
};

const Plan = ({ children }) => {
  const theme = useContext(ThemeContext);
  const level = R.view(levelLens, theme);

  return (
    <ThemeProvider theme={R.set(levelLens, level + 1, theme)}>
      <React.Fragment>{children}</React.Fragment>
    </ThemeProvider>
  );
};

Plan.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Plan;

export const planProp = prop => ({ theme }) => {
  const level = R.view(levelLens, theme);
  const propValues = R.pathOr([], ['plans', prop], theme);
  return R.pathOr(R.last(propValues), [level], propValues);
};
