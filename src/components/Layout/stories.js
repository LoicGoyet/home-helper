import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaShoppingCart, FaBook, FaInbox } from 'react-icons/lib/fa';
import { HashRouter } from 'react-router-dom';

import Layout from '../Layout';

const stories = storiesOf('Components|Layout', module);

stories.add('default', () => {
  const menu = [
    {
      icon: FaBook,
      path: '/',
      label: 'livre de recettes',
    },
    {
      icon: FaShoppingCart,
      path: '/',
      label: 'liste de courses',
    },
    {
      icon: FaInbox,
      path: '/',
      label: 'au menu',
    },
  ];

  return (
    <HashRouter>
      <Layout menu={menu}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam recusandae quas tenetur optio esse, a
        alias numquam eius cupiditate, reiciendis quaerat, illo magnam ipsum quasi placeat explicabo odit voluptates.
      </Layout>
    </HashRouter>
  );
});

export default stories;
