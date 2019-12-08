import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { PlanProvider } from 'components/Plan';

import colors from 'style/colors';
import metrics from 'style/metrics';

const Theme = props => (
  <ThemeProvider theme={{ colors, ...metrics }}>
    <PlanProvider
      properties={{
        color: ['rgb(250, 250, 250)'],
        backgroundColor: ['rgb(20, 20, 20)', 'rgb(30, 30, 30)', 'rgb(40, 40, 40)'],
        // boxShadow: [
        //   '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        //   '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        //   '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        // ],
        boxShadow: ['0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', 'none'],
      }}
    >
      {props.children}
    </PlanProvider>
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
