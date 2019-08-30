import React, { useCallback, useReducer } from 'react';
import { useDispatch } from 'react-redux';

import AddTaskComponent from 'containers/AddTask/component';
import { useAutoCategory, useAutoQuantityUnit } from 'containers/hooks';
import * as todos from 'ducks/todos/tasks';

const initialState = {
  fields: {
    product: '',
    category: '',
    quantity: '',
    quantityUnit: '',
  },
  activeStep: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_fields': {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.fields,
        },
      };
    }

    case 'set_category': {
      const { category } = action;

      return {
        ...state,
        fields: {
          ...state.fields,
          category,
        },
      };
    }

    case 'set_quantity_unit': {
      const { quantityUnit } = action;

      return {
        ...state,
        fields: {
          ...state.fields,
          quantityUnit,
        },
      };
    }

    case 'reset': {
      return { ...initialState };
    }

    case 'increase_step': {
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    }

    case 'goto_quantity_step': {
      return {
        ...state,
        activeStep: 2,
      };
    }

    default: {
      return state;
    }
  }
};

const AddTask = props => {
  const dispatch = useDispatch();
  const [state, stateDispatch] = useReducer(reducer, initialState);
  const getAutoCategory = useAutoCategory();
  const getAutoQuantityUnit = useAutoQuantityUnit();

  const onChange = useCallback(
    (e, values) => {
      stateDispatch({
        type: 'set_fields',
        fields: values,
      });
    },
    [stateDispatch]
  );

  const onFieldsetSubmit = useCallback(
    () => {
      if (state.activeStep === 0) {
        const autoQuantityUnit = getAutoQuantityUnit(state.fields.product);
        const autoCategory = getAutoCategory(state.fields.product);

        if (autoQuantityUnit) {
          stateDispatch({
            type: 'set_quantity_unit',
            quantityUnit: autoQuantityUnit,
          });
        }

        if (autoCategory) {
          stateDispatch({
            type: 'set_category',
            category: autoCategory,
          });

          return stateDispatch({ type: 'goto_quantity_step' });
        }
      }

      return stateDispatch({ type: 'increase_step' });
    },
    [stateDispatch, state, getAutoCategory, getAutoQuantityUnit]
  );

  const onReset = useCallback(() => stateDispatch({ type: 'reset' }), [stateDispatch]);

  const onSubmit = useCallback(
    () => {
      const { product, category, quantity, quantityUnit } = state.fields;
      return dispatch(todos.addTask(product, category, quantity, quantityUnit));
    },
    [dispatch, state.fields]
  );

  return (
    <AddTaskComponent
      {...props}
      values={state.fields}
      onChange={onChange}
      onFieldsetSubmit={onFieldsetSubmit}
      onSubmit={onSubmit}
      activeStep={state.activeStep}
      onReset={onReset}
    />
  );
};

export default React.memo(AddTask);
