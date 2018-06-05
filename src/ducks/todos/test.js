import reducer, * as ducks from '../todos';

describe('actions', () => {
  it('should create an action to add a task', () => {
    const title = 'Finish docs';
    const expectedAction = {
      type: ducks.ADD_TASK,
      title,
    };

    expect(ducks.addTask(title)).toEqual(expectedAction);
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
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(ducks.defaultState);
  });

  it(`should handle ${ducks.ADD_TASK}`, () => {
    const title = 'hello world !';
    const action = ducks.addTask(title);
    expect(reducer(undefined, action)).toEqual({
      baseId: 1,
      tasks: [
        {
          id: 0,
          title,
          done: false,
        },
      ],
    });

    const state = {
      baseId: 1,
      tasks: [
        {
          id: 0,
          title: 'title',
          done: false,
        },
      ],
    };

    expect(reducer(state, action)).toEqual({
      baseId: 2,
      tasks: [
        {
          id: 0,
          title: 'title',
          done: false,
        },
        {
          id: 1,
          title: 'hello world !',
          done: false,
        },
      ],
    });
  });

  it(`should handle ${ducks.TOGGLE_TASK}`, () => {
    const action = ducks.toggleTask(0);
    expect(reducer(undefined, action)).toEqual(ducks.defaultState);

    let state = {
      baseId: 1,
      tasks: [
        {
          id: 0,
          title: 'title',
          done: false,
        },
      ],
    };

    expect(reducer(state, action)).toEqual({
      baseId: 1,
      tasks: [
        {
          id: 0,
          title: 'title',
          done: true,
        },
      ],
    });

    state = {
      baseId: 1,
      tasks: [
        {
          id: 0,
          title: 'title',
          done: true,
        },
      ],
    };

    expect(reducer(state, action)).toEqual({
      baseId: 1,
      tasks: [
        {
          id: 0,
          title: 'title',
          done: false,
        },
      ],
    });
  });
});
