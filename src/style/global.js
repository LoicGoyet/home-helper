import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;
