import reducer, { defaultState, addTask, toggleTask, ADD_TASK, TOGGLE_TASK } from './index';

Date.now = jest.fn(() => 1534598990000);

describe('actions', () => {
  it('should create an action to add a task', () => {
    expect(addTask('Tomates', 'Fruits & Légumes', 2, 'pièces')).toEqual({
      type: ADD_TASK,
      title: 'Tomates',
      category: 'Fruits & Légumes',
      quantity: 2,
      quantityUnit: 'pièces',
    });
  });

  it('should create an action to toggle a task', () => {
    expect(toggleTask(1)).toEqual({
      type: TOGGLE_TASK,
      id: 1,
    });
  });
});

const stateMock = {
  byId: {
    0: {
      id: 0,
      title: 'Pommes de terre',
      category: 'Fruits & Légumes',
      quantity: 100,
      quantityUnit: 'grammes',
      done: false,
      createdAt: 1534598989178,
      updatedAt: 1534598989178,
    },
    1: {
      id: 1,
      title: 'Eau gazeuze',
      category: 'Boissons',
      quantity: 4,
      quantityUnit: 'bouteilles',
      done: true,
      createdAt: 1534598989179,
      updatedAt: 1534598989180,
    },
  },
  allIds: [0, 1],
  units: {},
};

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it(`should handle ${ADD_TASK}`, () => {
    const action = addTask('Ketchup', 'Épicerie sâlée', 1, 'bouteille');
    expect(reducer(stateMock, action)).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        2: {
          id: 2,
          title: 'Ketchup',
          category: 'Épicerie sâlée',
          quantity: 1,
          quantityUnit: 'bouteille',
          done: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      },
      allIds: [...stateMock.allIds, 2],
    });
  });

  it(`should handle change quantity ${ADD_TASK} to a not done task`, () => {
    const action = addTask('Pommes de terre', 'Fruits & Légumes', 50, 'grammes');

    expect(reducer(stateMock, action)).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        0: {
          ...stateMock.byId[0],
          quantity: 150,
          updatedAt: Date.now(),
        },
      },
    });
  });

  it(`should create a new task ${ADD_TASK} if the title is the same but not the quantity unit`, () => {
    const action = addTask('Pommes de terre', 'Fruits & Légumes', 1, 'pièce');
    expect(reducer(stateMock, action)).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        2: {
          id: 2,
          title: 'Pommes de terre',
          category: 'Fruits & Légumes',
          quantity: 1,
          quantityUnit: 'pièce',
          done: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      },
      allIds: [...stateMock.allIds, 2],
    });
  });

  it(`should handle ${TOGGLE_TASK}`, () => {
    expect(reducer(undefined, toggleTask(1))).toEqual(defaultState);
    expect(reducer(stateMock, toggleTask(1))).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        1: {
          ...stateMock.byId[1],
          done: false,
          updatedAt: Date.now(),
        },
      },
    });
    expect(reducer(stateMock, toggleTask(4))).toEqual(stateMock);
  });
});
