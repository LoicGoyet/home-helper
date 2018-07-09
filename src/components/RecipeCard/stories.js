import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, array } from '@storybook/addon-knobs/react';
import backgrounds from '@storybook/addon-backgrounds';
import { action } from '@storybook/addon-actions';

import RecipeCard from '../RecipeCard';
import Button from '../Button';
import Checkbox from '../Checkbox';

const stories = storiesOf('RecipeCard', module);
stories.addDecorator(backgrounds([{ name: 'purple', value: '#140A43', default: true }]));
stories.add('catalog card', () => (
  <RecipeCard
    title={text('title', 'Fish & Chips')}
    isOpen={boolean('isOpen', false)}
    tags={array('tags', ['Maison', 'Bento'])}
    onClick={action('wrapper click')}
    mainBtn={<Button block>Ajouter</Button>}
    actionRow={
      <React.Fragment>
        <Button style={{ marginRight: 'auto' }} color="#ff1212">
          Supprimer
        </Button>
        <Button>Modifier</Button>
        <Button>Détail</Button>
      </React.Fragment>
    }
  />
));
stories.add('available card', () => (
  <RecipeCard
    title={text('title', 'Fish & Chips')}
    isOpen={boolean('isOpen', false)}
    tags={array('tags', ['Maison', 'Bento'])}
    onClick={action('wrapper click')}
    mainBtn={<Checkbox title="example of checkbox" />}
    isReadyToCook={boolean('isReadyToCook', false)}
    ingredients={[
      {
        title: 'poison pané',
        quantity: 2,
        quantityUnit: 'pièces',
      },
      {
        title: 'pomme de terre',
        quantity: 300,
        quantityUnit: 'grammes',
      },
    ]}
  />
));

export default stories;
