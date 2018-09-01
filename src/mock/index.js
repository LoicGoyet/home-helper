import store from '../store';
import { addTask } from '../ducks/todos/tasks';
import { addInCollection } from '../ducks/recipes/collection';
import { addPantryEntry } from '../ducks/recipes/pantry';
import Config from '../config';

let mockIsLoaded = false;

export default () => {
  if (!Config.USE_MOCK || mockIsLoaded) return;
  store.dispatch(addTask("Jus d'Orange", 'Boissons', 1, 'piece'));
  store.dispatch(addTask('Croissants', 'Boulangerie', 4, 'piece'));
  store.dispatch(addTask('Coca-Cola Zero', 'Boissons', 2, 'piece'));
  store.dispatch(addTask('Baguette', 'Boulangerie', 1, 'piece'));
  store.dispatch(addTask('Thon', 'Épicerie salée', 140, 'grams'));
  store.dispatch(addTask('Croûtons', 'Épicerie salée', 50, 'grams'));
  store.dispatch(addTask('Céréales', 'Épicerie sucrée', 500, 'grams'));
  store.dispatch(addTask('Salade Batavia', 'Fruits & légumes', 1, 'piece'));
  store.dispatch(addTask('Tomates', 'Fruits & 2mes', 3, 'piece'));
  store.dispatch(addTask('Pain de mie', 'pièce(s)', 14, 'piece'));
  store.dispatch(addTask('Pizza', 'pièce(s) Frais', 2, 'piece'));
  store.dispatch(addTask('Blanc de Poulet', 'Produits frais', 2, 'piece'));
  store.dispatch(addTask('Émincés de Poulet', 'Produits frais', 150, 'grams'));

  store.dispatch(
    addInCollection(
      'Fish & Chips',
      ['maison'],
      [
        {
          productTitle: 'Poisson pâné',
          categoryTitle: 'Poissonerie',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Pomme de terre',
          categoryTitle: 'Fruits & légumes',
          quantity: 200,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Cordon bleu & pâtes',
      ['maison', 'bento'],
      [
        {
          productTitle: 'Cordon bleu',
          categoryTitle: 'Produits frais',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Pâtes',
          categoryTitle: 'Épicerie sâlée',
          quantity: 160,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Pizza industrielle',
      ['maison'],
      [
        {
          productTitle: 'Pizza industrielle',
          categoryTitle: 'Produits frais',
          quantity: 1,
          unitTitle: 'pièce(s)',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Taboulé & Betteraves',
      ['bento'],
      [
        {
          productTitle: 'Taboulé oriental',
          categoryTitle: 'Produits frais',
          quantity: 300,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Betteraves',
          categoryTitle: 'Produits frais',
          quantity: 300,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Quiche lorraine industrielle',
      ['bento'],
      [
        {
          productTitle: 'Quiche lorraine industrielle',
          categoryTitle: 'Produits frais',
          quantity: 400,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Tartines',
      ['maison'],
      [
        {
          productTitle: 'Baguette moulée',
          categoryTitle: 'Boulangerie',
          quantity: 1,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Madame Loïk',
          categoryTitle: 'Produits frais',
          quantity: 320,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Cheddar',
          categoryTitle: 'Produits frais',
          quantity: 200,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Salade',
          categoryTitle: 'Fruits & légumes',
          quantity: 0.2,
          unitTitle: 'pièce(s)(s)',
        },
        {
          productTitle: 'Tomates',
          categoryTitle: 'Fruits & légumes',
          quantity: 2,
          unitTitle: 'pièce(s)(s)',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Salade',
      ['bento'],
      [
        {
          productTitle: 'Salade',
          categoryTitle: 'Fruits & légumes',
          quantity: 0.2,
          unitTitle: 'pièce(s)(s)',
        },
        {
          productTitle: 'Tomates',
          categoryTitle: 'Fruits & légumes',
          quantity: 2,
          unitTitle: 'pièce(s)(s)',
        },
        {
          productTitle: 'Dés de mozzarela',
          categoryTitle: 'Produits frais',
          quantity: 200,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Croûtons',
          categoryTitle: 'Épicerie sâlée',
          quantity: 200,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Émincés de poulet',
          categoryTitle: 'Produits frais',
          quantity: 150,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Lasagnes au saumon industrielles',
      ['bento'],
      [
        {
          productTitle: 'Lasagnes au saumon industrielles',
          categoryTitle: 'Produits frais',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Saumon tomates mozzarela',
      ['bento'],
      [
        {
          productTitle: 'Saumon',
          categoryTitle: 'Produits frais',
          quantity: 2,
          unitTitle: 'pavé(s)',
        },
        {
          productTitle: 'Riz',
          categoryTitle: 'Épicerie sâlée',
          quantity: 160,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Tomates',
          categoryTitle: 'Fruits & légumes',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Mozzarella',
          categoryTitle: 'Produits frais',
          quantity: 125,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Crème fraîche',
          categoryTitle: 'Produits frais',
          quantity: 20,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Nuggets purée',
      ['maison'],
      [
        {
          productTitle: 'Nuggets de poulet',
          categoryTitle: 'Produits frais',
          quantity: 200,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Purée',
          categoryTitle: 'Épicerie sâlée',
          quantity: 1,
          unitTitle: 'sachet',
        },
        {
          productTitle: 'Lait',
          categoryTitle: 'Produits frais',
          quantity: 350,
          unitTitle: 'millilitres',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Tarte aux Tomates & Mozzarella',
      ['bento'],
      [
        {
          productTitle: 'Pâte feuilletée',
          categoryTitle: 'Produits frais',
          quantity: 1,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Tomates',
          categoryTitle: 'Fruits & légumes',
          quantity: 4,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Mozzarella',
          categoryTitle: 'Produits frais',
          quantity: 2,
          unitTitle: 'boule(s)',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Sandwich',
      ['bento'],
      [
        {
          productTitle: 'Pain de mie',
          categoryTitle: 'Épicerie sâlée',
          quantity: 8,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Jambon de dinde',
          categoryTitle: 'Produits frais',
          quantity: 4,
          unitTitle: 'tranche(s)',
        },
        {
          productTitle: 'Fromage en tranche',
          categoryTitle: 'Produits frais',
          quantity: 8,
          unitTitle: 'tranche(s)',
        },
        {
          productTitle: 'Salade',
          categoryTitle: 'Fruits & légumes',
          quantity: 0.25,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Tomates',
          categoryTitle: 'Fruits & légumes',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Thon en boîte',
          categoryTitle: 'Épicerie sâlée',
          quantity: 140,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Steak pâtes',
      ['bento', 'maison'],
      [
        {
          productTitle: 'Steak hâché',
          categoryTitle: 'Produits frais',
          quantity: 1,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Pâtes',
          categoryTitle: 'Épicerie sâlée',
          quantity: 160,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Thon en boîte',
          categoryTitle: 'Épicerie sâlée',
          quantity: 140,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Croque monsieur',
      ['maison'],
      [
        {
          productTitle: 'Pain de mie',
          categoryTitle: 'Épicerie sâlée',
          quantity: 6,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Fromage en tranche',
          categoryTitle: 'Produits frais',
          quantity: 6,
          unitTitle: 'tranche(s)',
        },
        {
          productTitle: 'Jambon de poulet',
          categoryTitle: 'Produits frais',
          quantity: 2,
          unitTitle: 'tranche(s)',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Gauffre au poulet',
      ['maison'],
      [
        {
          productTitle: 'Filet de poulet',
          categoryTitle: 'Produits frais',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Farine',
          categoryTitle: 'Épicerie sucée',
          quantity: 330,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Paprika',
          categoryTitle: 'Épicerie sâlée',
          quantity: 10,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Oignon en poudre',
          categoryTitle: 'Épicerie sâlée',
          quantity: 5,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Ail en poudre',
          categoryTitle: 'Épicerie sâlée',
          quantity: 5,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Lait ribot',
          categoryTitle: 'Produits frais',
          quantity: 400,
          unitTitle: 'millilitres',
        },
        {
          productTitle: 'Levure chimique',
          categoryTitle: 'Épicerie sucrée',
          quantity: 1,
          unitTitle: 'sachet(s)',
        },
        {
          productTitle: 'Sucre en poudre',
          categoryTitle: 'Épicerie sucrée',
          quantity: 10,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Oeufs',
          categoryTitle: 'Produits frais',
          quantity: 3,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Beurre',
          categoryTitle: 'Produits frais',
          quantity: 90,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Mini pizza muffins',
      ['maison'],
      [
        {
          productTitle: 'Pâte à pizza rectangle',
          categoryTitle: 'Produits frais',
          quantity: 1,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Coulis de tomate',
          categoryTitle: 'Épicerie sâlée',
          quantity: 200,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Fromage râpé',
          categoryTitle: 'Produits frais',
          quantity: 400,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Mozzarella',
          categoryTitle: 'Produits frais',
          quantity: 1,
          unitTitle: 'boule(s)',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Macaroni au fromage',
      ['maison'],
      [
        {
          productTitle: 'Macaroni',
          categoryTitle: 'Épicerie sâlée',
          quantity: 180,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Beurre',
          categoryTitle: 'Produits frais',
          quantity: 20,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Compté',
          categoryTitle: 'Produits frais',
          quantity: 100,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Parmesan',
          categoryTitle: 'Produits frais',
          quantity: 100,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Mozzarella',
          categoryTitle: 'Produits frais',
          quantity: 1,
          unitTitle: 'boule(s)',
        },
        {
          productTitle: 'Crème fraîche',
          categoryTitle: 'Produits frais',
          quantity: 50,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Poulet Wok',
      ['bento'],
      [
        {
          productTitle: 'Filet de poulet',
          categoryTitle: 'Produits frais',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Sauce soja',
          categoryTitle: 'Épicerie sâlée',
          quantity: 100,
          unitTitle: 'millilitres',
        },
        {
          productTitle: 'Poivron',
          categoryTitle: 'Fruits & légumes',
          quantity: 1,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Pâtes',
          categoryTitle: 'Épicerie sâlée',
          quantity: 160,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Cacahuètes',
          categoryTitle: 'Épicerie sâlée',
          quantity: 30,
          unitTitle: 'grammes',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Galettes',
      ['maison'],
      [
        {
          productTitle: 'Galettes de blé noir',
          categoryTitle: 'Produits frais',
          quantity: 3,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Fromage râpée',
          categoryTitle: 'Produits frais',
          quantity: 250,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Jambon de poulet',
          categoryTitle: 'Produits frais',
          quantity: 1,
          unitTitle: 'tranche(s)',
        },
        {
          productTitle: 'Cidre',
          categoryTitle: 'Boissons',
          quantity: 1,
          unitTitle: 'bouteille',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Old el Paso',
      ['maison'],
      [
        {
          productTitle: 'Filet de poulet',
          categoryTitle: 'Produits frais',
          quantity: 400,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Salade',
          categoryTitle: 'Fruits & légumes',
          quantity: 0.25,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Tomates',
          categoryTitle: 'Fruits & légumes',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Fromage râpé',
          categoryTitle: 'Produits Frais',
          quantity: 250,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Crème fraîche',
          categoryTitle: 'Produits Frais',
          quantity: 200,
          unitTitle: 'millilitres',
        },
        {
          productTitle: 'Kit Old el Paso',
          categoryTitle: 'Produits du monde',
          quantity: 1,
          unitTitle: 'boîte',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Quesadillas',
      ['maison'],
      [
        {
          productTitle: 'Farine',
          categoryTitle: 'Épicerie sucrée',
          quantity: 400,
          unitTitle: 'grammes',
        },
        {
          productTitle: "Huile d'olive",
          categoryTitle: 'Épicerie sâlée',
          quantity: 50,
          unitTitle: 'millilitres',
        },
        {
          productTitle: 'Cheddar',
          categoryTitle: 'Produits frais',
          quantity: 200,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'La vache qui rit',
          categoryTitle: 'Produits frais',
          quantity: 12,
          unitTitle: 'portion(s)',
        },
      ]
    )
  );

  store.dispatch(
    addInCollection(
      'Pâtes sauce pesto',
      ['maison'],
      [
        {
          productTitle: 'Pâtes',
          categoryTitle: 'Épicerie sâlée',
          quantity: 280,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Sauce pesto rouge',
          categoryTitle: 'Épicerie sâlée',
          quantity: 100,
          unitTitle: 'grammes',
        },
        {
          productTitle: 'Poivron',
          categoryTitle: 'Fruits & légumes',
          quantity: 1,
          unitTitle: 'pièce(s)',
        },
      ]
    )
  );

  store.dispatch(addPantryEntry(0));
  store.dispatch(addPantryEntry(1));
  store.dispatch(addPantryEntry(1));

  mockIsLoaded = true;
};
