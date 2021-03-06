import reducer, {
  defaultState,
  addProduct,
  setProductTitle,
  setProductCategory,
  ADD_PRODUCT,
  SET_PRODUCT_TITLE,
  SET_PRODUCT_CATEGORY,
} from './index';

Date.now = jest.fn(() => 1534598990000);

describe('actions', () => {
  it(`should create action '${ADD_PRODUCT}'`, () => {
    expect(addProduct('Pain de mie', 'Boulangerie')).toEqual({
      type: ADD_PRODUCT,
      title: 'Pain de mie',
      categoryTitle: 'Boulangerie',
    });
  });

  it(`should create action '${SET_PRODUCT_TITLE}'`, () => {
    expect(setProductTitle(0, 'Gel douche')).toEqual({
      type: SET_PRODUCT_TITLE,
      id: 0,
      title: 'Gel douche',
    });
  });

  it(`should create action '${SET_PRODUCT_CATEGORY}'`, () => {
    expect(setProductCategory(0, 'Gel douche')).toEqual({
      type: SET_PRODUCT_CATEGORY,
      id: 0,
      categoryTitle: 'Gel douche',
    });
  });
});

const stateMock = {
  byId: {
    0: {
      id: 0,
      title: 'Ketchup',
      createdAt: 1534598989178,
      updatedAt: 1534598989178,
    },
    1: {
      id: 1,
      title: 'Eau gazeuse',
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

  it('should update a product title', () => {
    expect(reducer(stateMock, setProductTitle(1, 'Poisson pâné'))).toEqual({
      ...stateMock,
      byId: {
        ...stateMock.byId,
        1: {
          ...stateMock.byId[1],
          title: 'Poisson pâné',
          updatedAt: Date.now(),
        },
      },
    });
  });
});
