import { injectGlobal } from 'styled-components';

import COLORS from './colors';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

    html {
      font-size: 14px;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: ${COLORS.violet};
        color: ${COLORS.white};
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;
