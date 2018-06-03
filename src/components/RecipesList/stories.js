import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';

import RecipesList from '../RecipesList';
import Button from '../Button';
import CheckButton from '../CheckButton';
import Checkbox from '../Checkbox';

const stories = storiesOf('RecipesList', module);
stories.addDecorator(backgrounds([{ name: 'purple', value: '#140A43', default: true }]));
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
    tags: ['Maison'],
    mainBtn: <Button block>Ajouter</Button>,
    actionRow: catalogActionRow,
  },
  {
    title: 'Pizza',
    tags: ['Maison'],
    mainBtn: <Button block>Ajouter</Button>,
    actionRow: catalogActionRow,
  },
  {
    title: 'Quesadillas',
    tags: ['Maison'],
    mainBtn: <Button block>Ajouter</Button>,
    actionRow: catalogActionRow,
  },
  {
    title: 'Pané pâtes',
    tags: ['Maison', 'Bento'],
    mainBtn: <Button block>Ajouter</Button>,
    actionRow: catalogActionRow,
  },
];

const availableList = [
  {
    title: 'Burger Maison',
    tags: ['Maison'],
    mainBtn: <Checkbox title="example of checkbox" />,
    ingredients: [
      {
        title: 'salade',
        quantity: {
          number: 1,
          unit: 'pièces',
        },
      },
      {
        title: 'oignon fris',
        quantity: {
          number: 30,
          unit: 'grammes',
        },
      },
      {
        title: 'filet de poulet',
        quantity: {
          number: 2,
          unit: 'pièces',
        },
      },
      {
        title: 'oeuf',
        quantity: {
          number: 3,
          unit: 'pièces',
        },
      },
      {
        title: 'panure',
        quantity: {
          number: 100,
          unit: 'grammes',
        },
      },
      {
        title: 'farine',
        quantity: {
          number: 500,
          unit: 'grammes',
        },
      },
      {
        title: 'levure de boulanger',
        quantity: {
          number: 1,
          unit: 'sachet',
        },
      },
      {
        title: 'sel',
        quantity: {
          number: 8,
          unit: 'grammes',
        },
      },
      {
        title: 'sucre roux',
        quantity: {
          number: 25,
          unit: 'grammes',
        },
      },
      {
        title: 'beurre',
        quantity: {
          number: 30,
          unit: 'grammes',
        },
      },
      {
        title: 'lait',
        quantity: {
          number: 80,
          unit: 'millilitres',
        },
      },
    ],
  },
  {
    title: 'Pizza',
    tags: ['Maison'],
    mainBtn: <Checkbox title="example of checkbox" />,
    ingredients: [
      {
        title: 'pizza',
        quantity: {
          number: 1,
          unit: 'pièces',
        },
      },
    ],
  },
  {
    title: 'Quesadillas',
    tags: ['Maison'],
    mainBtn: <Checkbox title="example of checkbox" />,
    ingredients: [
      {
        title: 'farine',
        quantity: {
          number: 400,
          unit: 'grammes',
        },
      },
      {
        title: 'sel',
        quantity: {
          number: 5,
          unit: 'grammes',
        },
      },
      {
        title: 'huile d’olive',
        quantity: {
          number: 50,
          unit: 'millilitres',
        },
      },
      {
        title: 'cheddar',
        quantity: {
          number: 200,
          unit: 'grammes',
        },
      },
      {
        title: 'vâche qui rit',
        quantity: {
          number: 12,
          unit: 'pièces',
        },
      },
    ],
  },
  {
    title: 'Pané pâtes',
    tags: ['Maison', 'Bento'],
    mainBtn: <Checkbox title="example of checkbox" />,
    ingredients: [
      {
        title: 'panés de dinde',
        quantity: {
          number: 2,
          unit: 'pièces',
        },
      },
      {
        title: 'pâtes',
        quantity: {
          number: 160,
          unit: 'grammes',
        },
      },
    ],
  },
];

const unavailableList = [
  {
    title: 'Burger Maison',
    tags: ['Maison'],
    mainBtn: <CheckButton isChecked />,
  },
  {
    title: 'Pizza',
    tags: ['Maison'],
    mainBtn: <CheckButton isChecked />,
  },
  {
    title: 'Quesadillas',
    tags: ['Maison'],
    mainBtn: <CheckButton isChecked />,
  },
  {
    title: 'Pané pâtes',
    tags: ['Maison', 'Bento'],
    mainBtn: <CheckButton isChecked />,
  },
];

export default stories;
