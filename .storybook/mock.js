export const tasks = {
  byId: {
    '0': {
      id: 0,
      product: 0,
      quantity: 4,
      unit: 0,
      done: false,
      createdAt: 1535322753837,
      updatedAt: 1535322753837,
    },
    '1': {
      id: 1,
      product: 1,
      quantity: 1,
      unit: 0,
      done: false,
      createdAt: 1535322753839,
      updatedAt: 1535322753839,
    },
    '2': {
      id: 2,
      product: 2,
      quantity: 1,
      unit: 0,
      done: false,
      createdAt: 1535322753841,
      updatedAt: 1535322753841,
    },
    '3': {
      id: 3,
      product: 3,
      quantity: 2,
      unit: 0,
      done: true,
      createdAt: 1535322753843,
      updatedAt: 1535322753843,
    },
    '4': {
      id: 4,
      product: 4,
      quantity: 140,
      unit: 1,
      done: false,
      createdAt: 1535322753853,
      updatedAt: 1535322753853,
    },
    '5': {
      id: 5,
      product: 5,
      quantity: 50,
      unit: 1,
      done: true,
      createdAt: 1535322753854,
      updatedAt: 1535322753854,
    },
    '6': {
      id: 6,
      product: 6,
      quantity: 500,
      unit: 1,
      done: false,
      createdAt: 1535322753856,
      updatedAt: 1535322753856,
    },
    '7': {
      id: 7,
      product: 7,
      quantity: 1,
      unit: 0,
      done: false,
      createdAt: 1535322753858,
      updatedAt: 1535322753858,
    },
    '8': {
      id: 8,
      product: 8,
      quantity: 3,
      unit: 0,
      done: false,
      createdAt: 1535322753859,
      updatedAt: 1535322753859,
    },
    '9': {
      id: 9,
      product: 9,
      quantity: 14,
      unit: 0,
      done: false,
      createdAt: 1535322753860,
      updatedAt: 1535322753860,
    },
    '10': {
      id: 10,
      product: 10,
      quantity: 2,
      unit: 0,
      done: false,
      createdAt: 1535322753862,
      updatedAt: 1535322753862,
    },
    '11': {
      id: 11,
      product: 11,
      quantity: 2,
      unit: 0,
      done: false,
      createdAt: 1535322753864,
      updatedAt: 1535322753864,
    },
    '12': {
      id: 12,
      product: 12,
      quantity: 150,
      unit: 1,
      done: true,
      createdAt: 1535322753865,
      updatedAt: 1535322753865,
    },
  },
  allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  units: {},
};

export const categories = {
  byId: {
    '0': {
      id: 0,
      title: 'Boulangerie',
      createdAt: 1535322753832,
      updatedAt: 1535322753832,
      color: '#1f6be0',
    },
    '1': {
      id: 1,
      title: 'Boissons',
      createdAt: 1535322753840,
      updatedAt: 1535322753840,
      color: '#f89f98',
    },
    '2': {
      id: 2,
      title: 'Épicerie salée',
      createdAt: 1535322753844,
      updatedAt: 1535322753844,
      color: '#845f85',
    },
    '3': {
      id: 3,
      title: 'Épicerie sucrée',
      createdAt: 1535322753855,
      updatedAt: 1535322753855,
      color: '#63a13a',
    },
    '4': {
      id: 4,
      title: 'Fruits & Légumes',
      createdAt: 1535322753857,
      updatedAt: 1535322753857,
      color: '#554c3f',
    },
    '5': {
      id: 5,
      title: 'Produits Frais',
      createdAt: 1535322753861,
      updatedAt: 1535322753861,
      color: '#4969c6',
    },
  },
  allIds: [0, 1, 2, 3, 4, 5],
};

export const products = {
  byId: {
    '0': {
      id: 0,
      title: 'Croissants',
      defaultUnit: 0,
      category: 0,
      createdAt: 1535322753834,
      updatedAt: 1535322753834,
    },
    '1': {
      id: 1,
      title: 'Baguette',
      defaultUnit: 0,
      category: 0,
      createdAt: 1535322753839,
      updatedAt: 1535322753839,
    },
    '2': {
      id: 2,
      title: "Jus d'Orange",
      defaultUnit: 0,
      category: 1,
      createdAt: 1535322753841,
      updatedAt: 1535322753841,
    },
    '3': {
      id: 3,
      title: 'Coca-Cola Zero',
      defaultUnit: 0,
      category: 1,
      createdAt: 1535322753843,
      updatedAt: 1535322753843,
    },
    '4': {
      id: 4,
      title: 'Thon',
      defaultUnit: 1,
      category: 2,
      createdAt: 1535322753844,
      updatedAt: 1535322753844,
    },
    '5': {
      id: 5,
      title: 'Croûtons',
      defaultUnit: 1,
      category: 2,
      createdAt: 1535322753854,
      updatedAt: 1535322753854,
    },
    '6': {
      id: 6,
      title: 'Céréales',
      defaultUnit: 1,
      category: 3,
      createdAt: 1535322753855,
      updatedAt: 1535322753855,
    },
    '7': {
      id: 7,
      title: 'Salade Batavia',
      defaultUnit: 0,
      category: 4,
      createdAt: 1535322753858,
      updatedAt: 1535322753858,
    },
    '8': {
      id: 8,
      title: 'Tomates',
      defaultUnit: 0,
      category: 4,
      createdAt: 1535322753858,
      updatedAt: 1535322753858,
    },
    '9': {
      id: 9,
      title: 'Pain de mie',
      defaultUnit: 0,
      category: 0,
      createdAt: 1535322753859,
      updatedAt: 1535322753859,
    },
    '10': {
      id: 10,
      title: 'Pizza',
      defaultUnit: 0,
      category: 5,
      createdAt: 1535322753862,
      updatedAt: 1535322753862,
    },
    '11': {
      id: 11,
      title: 'Blanc de Poulet',
      defaultUnit: 0,
      category: 5,
      createdAt: 1535322753863,
      updatedAt: 1535322753863,
    },
    '12': {
      id: 12,
      title: 'Émincés de Poulet',
      defaultUnit: 1,
      category: 5,
      createdAt: 1535322753865,
      updatedAt: 1535322753865,
    },
  },
  allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

export const units = {
  byId: {
    '0': {
      id: 0,
      title: 'piece',
      createdAt: 1535322753835,
      updatedAt: 1535322753835,
    },
    '1': {
      id: 1,
      title: 'grams',
      createdAt: 1535322753853,
      updatedAt: 1535322753853,
    },
  },
  allIds: [0, 1],
};


export const collection = {
  byId: {
    '0': {
      id: 0,
      title: 'Fish & Chips',
      ingredients: [
        {
          product: 0,
          quantity: 2,
          unit: 0
        },
        {
          product: 1,
          quantity: 200,
          unit: 1
        }
      ],
      createdAt: 1535573090703,
      updatedAt: 1535573090703,
      lastAddInPantry: 0
    },
    '1': {
      id: 1,
      title: 'Cordon bleu & pates',
      ingredients: [
        {
          product: 2,
          quantity: 2,
          unit: 0
        },
        {
          product: 3,
          quantity: 160,
          unit: 1
        }
      ],
      createdAt: 1535573090707,
      updatedAt: 1535573090707,
      lastAddInPantry: 0
    }
  },
  allIds: [
    0,
    1
  ]
}
