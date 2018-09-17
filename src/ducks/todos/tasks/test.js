import reducer, { defaultState, addTask, toggleTask, ADD_TASK, TOGGLE_TASK } from './index';

Date.now = jest.fn(() => 1534598990000);

describe('actions', () => {
  it('should create an action to add a task', () => {
    expect(addTask('Tomates', 'Fruits & Légumes', 2, 'pièces')).toEqual({
      type: ADD_TASK,
      productTitle: 'Tomates',
      categoryTitle: 'Fruits & Légumes',
      quantity: 2,
      unitTitle: 'pièces',
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
