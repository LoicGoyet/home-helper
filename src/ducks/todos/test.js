import reducer, * as ducks from '../todos';

describe('actions', () => {
  it('should create an action to add a task', () => {
    const title = 'Tomatoes';
    const category = 'Fruits & Vegetables';
    const expectedAction = {
      type: ducks.ADD_TASK,
      title,
      category,
    };

    expect(ducks.addTask(title, category)).toEqual(expectedAction);
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
    done: false,
    ...props,
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(ducks.defaultState);
  });

  it(`should handle ${ducks.ADD_TASK}`, () => {
    const title = 'Ketchup';
    const category = 'Grocery';
    const action = ducks.addTask(title, category);
    expect(reducer(undefined, action)).toEqual({
      baseId: 1,
      tasks: [taskShape({ title, category })],
    });

    const state = {
      baseId: 1,
      tasks: [taskShape()],
    };

    expect(reducer(state, action)).toEqual({
      baseId: 2,
      tasks: [
        taskShape(),
        taskShape({
          id: 1,
          title,
          category,
        }),
      ],
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
});
