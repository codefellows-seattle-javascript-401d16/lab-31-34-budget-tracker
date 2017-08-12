import uuid from 'uuid/v1';

//create helper functions to create actions.

//export them as constants to use in the dispatch.
export const categoryCreate = (category) => {
  //add id and timestamps for every category created.
  category.id = uuid();
  category.timestamp = new Date();
  //return the type and payload to match the reducer. payload should be the category being passed in.
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};
//return an object from the arrow function, must use ()
export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const categoryDestroy = (category) => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

//export the reset without any categories
export const categoryReset = () => ({
  type: 'CATEGORY_RESET',
});

export const categoryBudgetSubtraction = (expense) => ({
  type: 'CATEGORY_AMOUNT_SUBTRACT',
  payload: expense,
});
