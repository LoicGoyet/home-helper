import { createGlobalStyle } from 'styled-components';

import COLORS from 'style/colors';

export default createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 1rem 0 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    background-color: rgb(0, 0, 0);
    color: ${COLORS.white};
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }
`;
