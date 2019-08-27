import React from 'react';
import { FaShoppingCart, FaBook, FaInbox } from 'react-icons/lib/fa';
import { HashRouter } from 'react-router-dom';

import Layout from 'components/Layout';

export default {
  title: 'components|Layout',
};

export const story1 = () => {
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
};

story1.story = {
  name: 'default',
};
