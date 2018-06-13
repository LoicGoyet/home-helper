import reducer, * as ducks from '../todos';

describe('actions', () => {
  it('should create an action to add a task', () => {
    const title = 'Tomatoes';
    const category = 'Fruits & Vegetables';
    const quantity = 2;
    const quantityUnit = 'piece';
    const expectedAction = {
      type: ducks.ADD_TASK,
      title,
      category,
      quantity,
      quantityUnit,
    };

    expect(ducks.addTask(title, category, quantity, quantityUnit)).toEqual(expectedAction);
  });

  it('should create an action to toggle a task', () => {
    const id = 1;
    const expectedAction = {
      type: ducks.TOGGLE_TASK,
      id,
    };

    expect(ducks.toggleTask(id)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  const taskShape = (props = {}) => ({
    id: 0,
    title: 'Tomatoes',
    category: 'Fruits & Vegetables',
    quantity: 2,
    quantityUnit: 'piece',
    done: false,
    ...props,
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(ducks.defaultState);
  });

  it(`should handle ${ducks.ADD_TASK}`, () => {
    const title = 'Ketchup';
    const category = 'Grocery';
    const quantity = 1;
    const quantityUnit = 'piece';
    const action = ducks.addTask(title, category, quantity, quantityUnit);
    expect(reducer(undefined, action)).toEqual({
      baseId: 1,
      tasks: [taskShape({ title, category, quantity, quantityUnit })],
      units: {
        [title]: quantityUnit,
      },
    });

    const state = {
      baseId: 1,
      tasks: [taskShape()],
      units: {
        [taskShape().title]: taskShape().quantityUnit,
      },
    };

    expect(reducer(state, action)).toEqual({
      baseId: 2,
      tasks: [
        taskShape(),
        taskShape({
          id: 1,
          title,
          category,
          quantity,
          quantityUnit,
        }),
      ],
      units: {
        [taskShape().title]: taskShape().quantityUnit,
        [title]: quantityUnit,
      },
    });
  });

  it(`should handle change quantity ${ducks.ADD_TASK} to a not done task`, () => {
    const { title, category, quantity, quantityUnit } = taskShape();
    const action = ducks.addTask(title, category, quantity, quantityUnit);

    const state = {
      baseId: 1,
      tasks: [taskShape()],
      units: {
        [taskShape().title]: taskShape().quantityUnit,
      },
    };

    expect(reducer(state, action)).toEqual({
      baseId: 1,
      tasks: [
        taskShape({
          quantity: quantity * 2,
        }),
      ],
      units: {
        [taskShape().title]: taskShape().quantityUnit,
      },
    });
  });

  it(`should handle change quantity ${ducks.ADD_TASK} to a not done task`, () => {
    const { title, category, quantityUnit } = taskShape();
    const quantity = 10;
    const action = ducks.addTask(title, category, quantity, quantityUnit);

    const state = {
      baseId: 1,
      tasks: [
        taskShape({
          done: true,
        }),
      ],
      units: {
        [taskShape().title]: taskShape().quantityUnit,
      },
    };

    expect(reducer(state, action)).toEqual({
      baseId: 1,
      tasks: [
        taskShape({
          quantity,
          done: false,
        }),
      ],
      units: {
        [taskShape().title]: taskShape().quantityUnit,
      },
    });
  });

  it(`should handle ${ducks.TOGGLE_TASK}`, () => {
    const action = ducks.toggleTask(0);
    expect(reducer(undefined, action)).toEqual(ducks.defaultState);

    let state = {
      baseId: 1,
      tasks: [taskShape()],
    };

    expect(reducer(state, action)).toEqual({
      baseId: 1,
      tasks: [taskShape({ done: true })],
    });

    state = {
      baseId: 1,
      tasks: [taskShape({ done: true })],
    };

    expect(reducer(state, action)).toEqual({
      baseId: 1,
      tasks: [taskShape()],
    });
  });

  it(`should handle ${ducks.UPDATE_CATEGORY}`, () => {
    const action = ducks.updateCategory('Fruits & Vegetables', 'Vegetables');
    expect(reducer(undefined, action)).toEqual(ducks.defaultState);

    let state = {
      baseId: 1,
      tasks: [taskShape()],
    };

    expect(reducer(state, action)).toEqual({
      baseId: 1,
      tasks: [taskShape({ category: 'Vegetables' })],
    });

    state = {
      baseId: 1,
      tasks: [taskShape({ title: 'Ketchup', category: 'Grocery' }), taskShape({ title: 'Salt', category: 'Grocery' })],
    };

    expect(reducer(state, action)).toEqual(state);
  });
});
