import React from 'react';
import { FaShoppingCart, FaBook, FaInbox } from 'react-icons/lib/fa';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Menu from 'components/Menu';

export default {
  title: 'components|Menu',
};

export const story1 = () => (
  <HashRouter>
    <React.Fragment>
      <Switch>
        {/* eslint-disable react/no-children-prop */}
        <Route path="/test-1" children={() => <div>lorem</div>} />
        <Route path="/test-2" children={() => <div>ipsum</div>} />
        <Route path="/test-3" children={() => <div>dolor</div>} />
        {/* eslint-enable react/no-children-prop */}

        <Redirect from="*" to="/test-1" />
      </Switch>

      <Menu
        items={[
          {
            icon: FaBook,
            path: '/test-1',
            label: 'livre de recettes',
          },
          {
            icon: FaShoppingCart,
            path: '/test-2',
            label: 'liste de courses',
          },
          {
            icon: FaInbox,
            path: '/test-3',
            label: 'au menu',
          },
        ]}
      />
    </React.Fragment>
  </HashRouter>
);

story1.story = {
  name: 'default',
};
