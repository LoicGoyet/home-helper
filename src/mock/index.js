import store from '../store';
import { addTask } from '../ducks/todos';
import Config from '../config';

export default () => {
  if (!Config.USE_MOCK) return;
  store.dispatch(addTask('Croissants', 'Boulangerie', 4, 'piece'));
  store.dispatch(addTask('Baguette', 'Boulangerie', 1, 'piece'));
  store.dispatch(addTask("Jus d'Orange", 'Boissons', 1, 'piece'));
  store.dispatch(addTask('Coca-Cola Zero', 'Boissons', 2, 'piece'));
  store.dispatch(addTask('Thon', 'Épicerie salée', 140, 'grams'));
  store.dispatch(addTask('Croûtons', 'Épicerie salée', 50, 'grams'));
  store.dispatch(addTask('Céréales', 'Épicerie sucrée', 500, 'grams'));
  store.dispatch(addTask('Salade Batavia', 'Fruits & Légumes', 1, 'piece'));
  store.dispatch(addTask('Tomates', 'Fruits & Légumes', 3, 'piece'));
  store.dispatch(addTask('Pain de mie', 'Boulangerie', 14, 'piece'));
  store.dispatch(addTask('Pizza', 'Produits Frais', 2, 'piece'));
  store.dispatch(addTask('Blanc de Poulet', 'Produits Frais', 2, 'piece'));
  store.dispatch(addTask('Émincés de Poulet', 'Produits Frais', 150, 'grams'));
};
