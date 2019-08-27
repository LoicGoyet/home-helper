import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { withReduxProvider, withSuggestionLists } from 'storybook/decorators';
import IngredientField from 'container/IngredientField';
import Button from 'components/Button';

export default {
  title: 'container|IngredientField',
  decorators: [withSuggestionLists, withReduxProvider],
};

const onChange = cb => e => {
  action('onChange')(e);
  return cb(e);
};

export const DefaultStory = () => {
  const [values, setValues] = useState({
    productTitle: '',
    categoryTitle: '',
    quantity: 0,
    unitTitle: '',
  });

  return <IngredientField values={values} onChange={onChange(setValues)} />;
};

DefaultStory.story = {
  name: 'default',
};

export const WithValuesStory = () => {
  const [values, setValues] = useState({
    productTitle: 'Croissants',
    categoryTitle: 'Boulangerie',
    quantity: 10,
    unitTitle: 'pièce(s)',
  });

  return <IngredientField values={values} onChange={setValues} />;
};

WithValuesStory.story = {
  name: 'with initial value',
};

export const ChildrenStory = () => {
  const [values, setValues] = useState({
    productTitle: '',
    categoryTitle: '',
    quantity: 0,
    unitTitle: '',
  });

  return (
    <IngredientField values={values} onChange={setValues}>
      <Button>Supprimer</Button>
    </IngredientField>
  );
};

ChildrenStory.story = {
  name: 'with additional children',
};
