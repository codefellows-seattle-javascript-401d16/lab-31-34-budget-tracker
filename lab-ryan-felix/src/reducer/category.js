import {Category} from '../actions/action-names.js';

const reducers = {
  [Category.CREATE](state, action) {
    return {
      categories: [...state.categories, action.payload],
    };
  },

  [Category.UPDATE](state, action) {
    return {
      categories: state.categories.map(category => category.id === action.payload.id ? action.payload : category),
    };
  },

  [Category.DELETE](state, action) {
    return {
      categories: state.categories.filter(category => category.id !== action.payload.id),
    };
  },
};

export default reducers;
