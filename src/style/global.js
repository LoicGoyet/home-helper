import { createGlobalStyle } from 'styled-components';

import COLORS from 'style/colors';

export default createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    background-color: ${COLORS.violet};
    color: ${COLORS.white};
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }
`;
