import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import colors from './colors';

export const Theme = props => <ThemeProvider theme={{ colors }}>{props.children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
