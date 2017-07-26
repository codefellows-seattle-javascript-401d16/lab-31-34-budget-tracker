import {Expense} from '../actions/action-names.js';

const reducers = {
  [Expense.CREATE](state, action) {
    return {
      expenses: [...state.expenses, action.payload],
    };
  },

  [Expense.UPDATE](state, action) {
    console.log('updating expense');
    console.log(action);
    return {
      expenses: state.expenses.map(expense => expense.id === action.payload.id
        ? action.payload
        : expense),
    };
  },

  [Expense.DELETE](state, action) {
    return {
      expenses: state.expenses.filter(expense => expense.id !== action.payload.id),
    };
  },
};

export default reducers;
