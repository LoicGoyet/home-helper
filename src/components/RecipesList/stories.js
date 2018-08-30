import React from 'react';
import { storiesOf } from '@storybook/react';

import RecipesList from '../RecipesList';
import Button from '../Button';
import CheckButton from '../CheckButton';
import Checkbox from '../Checkbox';

const stories = storiesOf('RecipesList', module);
stories.add('catalog list', () => <RecipesList recipes={recipesCatalog} />);
stories.add('available list', () => (
  <div>
    <RecipesList recipes={availableList} />
    <RecipesList recipes={unavailableList} isDone />
  </div>
));

const catalogActionRow = (
  <React.Fragment>
    <Button style={{ marginRight: 'auto' }} color="#ff1212">
      Supprimer
    </Button>
    <Button>Modifier</Button>
    <Button>Détail</Button>
  </React.Fragment>
);

const recipesCatalog = [
  {
    title: 'Burger Maison',
    id: 0,
    tags: ['Maison'],
    mainBtn: <Button block>Ajouter</Button>,
    actionRow: catalogActionRow,
  },
  {
    title: 'Pizza',
    id: 1,
    tags: ['Maison'],
    mainBtn: <Button block>Ajouter</Button>,
    actionRow: catalogActionRow,
  },
  {
    title: 'Quesadillas',
    id: 2,
    tags: ['Maison'],
    mainBtn: <Button block>Ajouter</Button>,
    actionRow: catalogActionRow,
  },
  {
    title: 'Pané pâtes',
    id: 3,
    tags: ['Maison', 'Bento'],
    mainBtn: <Button block>Ajouter</Button>,
    actionRow: catalogActionRow,
  },
];

const availableList = [
  {
    title: 'Burger Maison',
    id: 4,
    tags: ['Maison'],
    mainBtn: <Checkbox title="example of checkbox" />,
    ingredients: [
      {
        title: 'salade',
        quantity: 1,
        quantityUnit: 'pièces',
      },
      {
        title: 'oignon fris',
        quantity: 30,
        quantityUnit: 'grammes',
      },
      {
        title: 'filet de poulet',
        quantity: 2,
        quantityUnit: 'pièces',
      },
      {
        title: 'oeuf',
        quantity: 3,
        quantityUnit: 'pièces',
      },
      {
        title: 'panure',
        quantity: 100,
        quantityUnit: 'grammes',
      },
      {
        title: 'farine',
        quantity: 500,
        quantityUnit: 'grammes',
      },
      {
        title: 'levure de boulanger',
        quantity: 1,
        quantityUnit: 'sachet',
      },
      {
        title: 'sel',
        quantity: 8,
        quantityUnit: 'grammes',
      },
      {
        title: 'sucre roux',
        quantity: 25,
        quantityUnit: 'grammes',
      },
      {
        title: 'beurre',
        quantity: 30,
        quantityUnit: 'grammes',
      },
      {
        title: 'lait',
        quantity: 80,
        quantityUnit: 'millilitres',
      },
    ],
  },
  {
    title: 'Pizza',
    id: 5,
    tags: ['Maison'],
    mainBtn: <Checkbox title="example of checkbox" />,
    ingredients: [
      {
        title: 'pizza',
        quantity: 1,
        quantityUnit: 'pièces',
      },
    ],
  },
  {
    title: 'Quesadillas',
    id: 6,
    tags: ['Maison'],
    mainBtn: <Checkbox title="example of checkbox" />,
    ingredients: [
      {
        title: 'farine',
        quantity: 400,
        quantityUnit: 'grammes',
      },
      {
        title: 'sel',
        quantity: 5,
        quantityUnit: 'grammes',
      },
      {
        title: 'huile d’olive',
        quantity: 50,
        quantityUnit: 'millilitres',
      },
      {
        title: 'cheddar',
        quantity: 200,
        quantityUnit: 'grammes',
      },
      {
        title: 'vâche qui rit',
        quantity: 12,
        quantityUnit: 'pièces',
      },
    ],
  },
  {
    title: 'Pané pâtes',
    id: 7,
    tags: ['Maison', 'Bento'],
    mainBtn: <Checkbox title="example of checkbox" />,
    ingredients: [
      {
        title: 'panés de dinde',
        quantity: 2,
        quantityUnit: 'pièces',
      },
      {
        title: 'pâtes',
        quantity: 160,
        quantityUnit: 'grammes',
      },
    ],
  },
];

const unavailableList = [
  {
    title: 'Burger Maison',
    id: 8,
    tags: ['Maison'],
    mainBtn: <CheckButton isChecked />,
  },
  {
    title: 'Pizza',
    id: 9,
    tags: ['Maison'],
    mainBtn: <CheckButton isChecked />,
  },
  {
    title: 'Quesadillas',
    id: 10,
    tags: ['Maison'],
    mainBtn: <CheckButton isChecked />,
  },
  {
    title: 'Pané pâtes',
    id: 11,
    tags: ['Maison', 'Bento'],
    mainBtn: <CheckButton isChecked />,
  },
];

export default stories;
