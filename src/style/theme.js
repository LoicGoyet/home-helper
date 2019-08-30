import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import colors from 'style/colors';
import metrics from 'style/metrics';

const Theme = props => <ThemeProvider theme={{ colors, ...metrics }}>{props.children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
