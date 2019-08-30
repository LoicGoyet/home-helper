import reducer, {
  defaultState,
  addCategory,
  updateCategory,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
} from 'ducks/todos/categories';
import { strToColor } from 'utils/colors';

Date.now = jest.fn(() => 1534598990000);

describe('actions', () => {
  it(`should create action '${ADD_CATEGORY}'`, () => {
    expect(addCategory('Boulangerie')).toEqual({
      type: ADD_CATEGORY,
      title: 'Boulangerie',
    });
  });

  it(`should create action '${UPDATE_CATEGORY}'`, () => {
    expect(updateCategory(0, 'Boucherie')).toEqual({
      type: UPDATE_CATEGORY,
      id: 0,
      title: 'Boucherie',
    });
  });
});

const stateMock = {
  byId: {
    0: {
      id: 0,
      title: 'Boulangerie',
      color: strToColor('Boulangerie'),
      pos: 0,
      createdAt: 1534598989178,
      updatedAt: 1534598989178,
    },
    1: {
      id: 1,
      title: 'Épicerie salée',
      color: strToColor('Épicerie salée'),
      pos: 1,
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

  it('should add a new category', () => {
    expect(reducer(stateMock, addCategory('Produits Frais'))).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        2: {
          id: 2,
          title: 'Produits Frais',
          color: strToColor('Produits Frais'),
          pos: 2,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      },
      allIds: [...stateMock.allIds, 2],
    });
  });

  it('should update a new category', () => {
    expect(reducer(stateMock, updateCategory(1, 'Pâtisserie'))).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        1: {
          ...stateMock.byId[1],
          title: 'Pâtisserie',
          updatedAt: Date.now(),
        },
      },
    });
  });
});
