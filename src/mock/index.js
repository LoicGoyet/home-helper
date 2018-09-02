import store from '../store';
import { addTask } from '../ducks/todos/tasks';
import { addInCollection } from '../ducks/recipes/collection';
import { addPantryEntry } from '../ducks/recipes/pantry';
import Config from '../config';

let mockIsLoaded = false;

export default () => {
  if (!Config.USE_MOCK || mockIsLoaded) return;
  store.dispatch(addTask("Jus d'Orange", 'Boissons', 1, 'pièce(s)'));
  store.dispatch(addTask('Croissants', 'Boulangerie', 4, 'pièce(s)'));
  store.dispatch(addTask('Coca-Cola Zero', 'Boissons', 2, 'pièce(s)'));
  store.dispatch(addTask('Baguette', 'Boulangerie', 1, 'pièce(s)'));
  store.dispatch(addTask('Thon en boîte', 'Épicerie salée', 140, 'gramme(s)'));
  store.dispatch(addTask('Croûtons', 'Épicerie salée', 50, 'gramme(s)'));
  store.dispatch(addTask('Céréales', 'Épicerie sucrée', 500, 'gramme(s)'));
  store.dispatch(addTask('Salade Batavia', 'Fruits & légumes', 1, 'pièce(s)'));
  store.dispatch(addTask('Tomates', 'Fruits & légumes', 3, 'pièce(s)'));
  store.dispatch(addTask('Pain de mie', 'Boulangerie', 14, 'pièce(s)'));
  store.dispatch(addTask('Pizza industrielle', 'Produits frais', 2, 'pièce(s)'));
  store.dispatch(addTask('Blanc de Poulet', 'Produits frais', 2, 'pièce(s)'));
  store.dispatch(addTask('Émincés de Poulet', 'Produits frais', 150, 'gramme(s)'));

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
          unitTitle: 'gramme(s)',
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
          categoryTitle: 'Épicerie salée',
          quantity: 160,
          unitTitle: 'gramme(s)',
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
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Betteraves',
          categoryTitle: 'Produits frais',
          quantity: 300,
          unitTitle: 'gramme(s)',
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
          unitTitle: 'gramme(s)',
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
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Cheddar',
          categoryTitle: 'Produits frais',
          quantity: 200,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Salade',
          categoryTitle: 'Fruits & légumes',
          quantity: 0.2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Tomates',
          categoryTitle: 'Fruits & légumes',
          quantity: 2,
          unitTitle: 'pièce(s)',
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
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Tomates',
          categoryTitle: 'Fruits & légumes',
          quantity: 2,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Dés de mozzarela',
          categoryTitle: 'Produits frais',
          quantity: 200,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Croûtons',
          categoryTitle: 'Épicerie salée',
          quantity: 200,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Émincés de poulet',
          categoryTitle: 'Produits frais',
          quantity: 150,
          unitTitle: 'gramme(s)',
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
          categoryTitle: 'Épicerie salée',
          quantity: 160,
          unitTitle: 'gramme(s)',
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
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Crème fraîche',
          categoryTitle: 'Produits frais',
          quantity: 20,
          unitTitle: 'gramme(s)',
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
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Purée',
          categoryTitle: 'Épicerie salée',
          quantity: 1,
          unitTitle: 'sachet(s)',
        },
        {
          productTitle: 'Lait',
          categoryTitle: 'Produits frais',
          quantity: 350,
          unitTitle: 'millilitre(s)',
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
          categoryTitle: 'Épicerie salée',
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
          categoryTitle: 'Épicerie salée',
          quantity: 140,
          unitTitle: 'gramme(s)',
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
          categoryTitle: 'Épicerie salée',
          quantity: 160,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Thon en boîte',
          categoryTitle: 'Épicerie salée',
          quantity: 140,
          unitTitle: 'gramme(s)',
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
          categoryTitle: 'Épicerie salée',
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
          categoryTitle: 'Épicerie sucrée',
          quantity: 330,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Paprika',
          categoryTitle: 'Épicerie salée',
          quantity: 10,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Oignon en poudre',
          categoryTitle: 'Épicerie salée',
          quantity: 5,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Ail en poudre',
          categoryTitle: 'Épicerie salée',
          quantity: 5,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Lait ribot',
          categoryTitle: 'Produits frais',
          quantity: 400,
          unitTitle: 'millilitre(s)',
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
          unitTitle: 'gramme(s)',
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
          unitTitle: 'gramme(s)',
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
          categoryTitle: 'Épicerie salée',
          quantity: 200,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Fromage râpé',
          categoryTitle: 'Produits frais',
          quantity: 400,
          unitTitle: 'gramme(s)',
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
          categoryTitle: 'Épicerie salée',
          quantity: 180,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Beurre',
          categoryTitle: 'Produits frais',
          quantity: 20,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Compté',
          categoryTitle: 'Produits frais',
          quantity: 100,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Parmesan',
          categoryTitle: 'Produits frais',
          quantity: 100,
          unitTitle: 'gramme(s)',
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
          unitTitle: 'gramme(s)',
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
          categoryTitle: 'Épicerie salée',
          quantity: 100,
          unitTitle: 'millilitre(s)',
        },
        {
          productTitle: 'Poivron',
          categoryTitle: 'Fruits & légumes',
          quantity: 1,
          unitTitle: 'pièce(s)',
        },
        {
          productTitle: 'Pâtes',
          categoryTitle: 'Épicerie salée',
          quantity: 160,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Cacahuètes',
          categoryTitle: 'Épicerie salée',
          quantity: 30,
          unitTitle: 'gramme(s)',
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
          productTitle: 'Fromage râpé',
          categoryTitle: 'Produits frais',
          quantity: 250,
          unitTitle: 'gramme(s)',
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
          unitTitle: 'bouteille(s)',
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
          unitTitle: 'gramme(s)',
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
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Crème fraîche',
          categoryTitle: 'Produits Frais',
          quantity: 200,
          unitTitle: 'millilitre(s)',
        },
        {
          productTitle: 'Kit Old el Paso',
          categoryTitle: 'Produits du monde',
          quantity: 1,
          unitTitle: 'boîte(s)',
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
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: "Huile d'olive",
          categoryTitle: 'Épicerie salée',
          quantity: 50,
          unitTitle: 'millilitre(s)',
        },
        {
          productTitle: 'Cheddar',
          categoryTitle: 'Produits frais',
          quantity: 200,
          unitTitle: 'gramme(s)',
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
          categoryTitle: 'Épicerie salée',
          quantity: 280,
          unitTitle: 'gramme(s)',
        },
        {
          productTitle: 'Sauce pesto rouge',
          categoryTitle: 'Épicerie salée',
          quantity: 100,
          unitTitle: 'gramme(s)',
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
