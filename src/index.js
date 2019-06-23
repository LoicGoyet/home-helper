import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Theme from './style/theme';
import GlobalStyle from './style/global';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Theme>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </Theme>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
