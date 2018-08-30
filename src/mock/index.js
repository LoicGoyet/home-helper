import store from '../store';
import { addTask } from '../ducks/todos/tasks';
import { addInCollection } from '../ducks/recipes/collection';
import Config from '../config';

let mockIsLoaded = false;

export default () => {
  if (!Config.USE_MOCK || mockIsLoaded) return;
  // store.dispatch(addTask("Jus d'Orange", 'Boissons', 1, 'piece'));
  // store.dispatch(addTask('Croissants', 'Boulangerie', 4, 'piece'));
  // store.dispatch(addTask('Coca-Cola Zero', 'Boissons', 2, 'piece'));
  // store.dispatch(addTask('Baguette', 'Boulangerie', 1, 'piece'));
  // store.dispatch(addTask('Thon', 'Épicerie salée', 140, 'grams'));
  // store.dispatch(addTask('Croûtons', 'Épicerie salée', 50, 'grams'));
  // store.dispatch(addTask('Céréales', 'Épicerie sucrée', 500, 'grams'));
  // store.dispatch(addTask('Salade Batavia', 'Fruits & Légumes', 1, 'piece'));
  // store.dispatch(addTask('Tomates', 'Fruits & Légumes', 3, 'piece'));
  // store.dispatch(addTask('Pain de mie', 'Boulangerie', 14, 'piece'));
  // store.dispatch(addTask('Pizza', 'Produits Frais', 2, 'piece'));
  // store.dispatch(addTask('Blanc de Poulet', 'Produits Frais', 2, 'piece'));
  // store.dispatch(addTask('Émincés de Poulet', 'Produits Frais', 150, 'grams'));

  store.dispatch(
    addInCollection(
      'Fish & Chips',
      ['maison'],
      [
        {
          productTitle: 'Poisson pâné',
          categoryTitle: 'Poissonerie',
          quantity: 2,
          unitTitle: 'units',
        },
        {
          productTitle: 'Pomme de terre',
          categoryTitle: 'Fruits & Légumes',
          quantity: 200,
          unitTitle: 'grams',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Cordon bleu & pates',
      ['maison', 'bento'],
      [
        {
          productTitle: 'Cordon bleu',
          categoryTitle: 'Produits Frais',
          quantity: 2,
          unitTitle: 'units',
        },
        {
          productTitle: 'Pates',
          categoryTitle: 'Épicerie salée',
          quantity: 160,
          unitTitle: 'grams',
        },
      ]
    )
  );

  // store.dispatch(addInPantry(0));
  // store.dispatch(addInPantry(1));
  // store.dispatch(addInPantry(1));

  mockIsLoaded = true;
};
