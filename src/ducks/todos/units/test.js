import reducer, { defaultState, addUnit, setUnitTitle, ADD_UNIT, SET_UNIT_TITLE } from './index';

Date.now = jest.fn(() => 1534598990000);

describe('actions', () => {
  it(`should create action '${ADD_UNIT}'`, () => {
    expect(addUnit('Pièce')).toEqual({
      type: ADD_UNIT,
      title: 'Pièce',
    });
  });

  it(`should create action '${SET_UNIT_TITLE}'`, () => {
    expect(setUnitTitle(0, 'Tranche')).toEqual({
      type: SET_UNIT_TITLE,
      id: 0,
      title: 'Tranche',
    });
  });
});

const stateMock = {
  byId: {
    0: {
      id: 0,
      title: 'Bouteille',
      createdAt: 1534598989178,
      updatedAt: 1534598989178,
    },
    1: {
      id: 1,
      title: 'Pièce',
      createdAt: 1534598989179,
      updatedAt: 1534598989180,
    },
  },
  allIds: [0, 1],
};

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it('should add a new product', () => {
    expect(reducer(stateMock, addUnit('Pack'))).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        2: {
          id: 2,
          title: 'Pack',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      },
      allIds: [...stateMock.allIds, 2],
    });
  });

  it('should update a product title', () => {
    expect(reducer(stateMock, setUnitTitle(1, 'Grammes'))).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        1: {
          ...stateMock.byId[1],
          title: 'Grammes',
          updatedAt: Date.now(),
        },
      },
    });
  });
});
