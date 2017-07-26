import categoryReducer from './category.js';

const initialState = {
  categories: [],
};
const reducers = {...categoryReducer};

/*
    This is a different (and IMO more elegant) way of structuring reducers.
    We create some reducer objects and import them here.
    Each reducer object has methods to handle actions.
      (Action names are declared in a separate file and imported into the reducers,
       so we don't have evil string literals floating around in multiple places.)
    Those methods return the *desired change in state*, not the full new state.
    We combine all of those reducer objects into one big object, and in createReducer()
      we forward an action to its proper handler, then get back the change in state,
      and then apply the change.

    Why I like this better:
      * It is DRYer code - we only have one Object.assign, not one for every reducer
      * It minimizes boilerplate - no more switch/case/default statements everywhere,
          all of the code inside a reducer is 'real' reducer code

*/

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if(handlers.hasOwnProperty(action.type)) {
      return Object.assign({}, state, handlers[action.type](state, action));
    } else {
      return state;
    }
  };
};

export default createReducer(initialState, reducers);
