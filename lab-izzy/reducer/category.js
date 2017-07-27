let validatePayload = (payload) => {
  if(!payload.id || !payload.title || !payload.timestamp)
    throw new Error('VALIDATION ERROR: category must have id, title, and timestamp');
};

let initialState = [];
export default (state=initialState, action) => {
  let {type, payload} = action;
  switch(type){
  case 'CATEGORY_CREATE':
    validatePayload(payload);
    return [...state, payload];

  case 'CATEGORY_UPDATE':
    validatePayload(payload);
    return state.map(category =>
      category.id == payload.id ? payload : category);

  case 'CATEGORY_DELETE':
    validatePayload(payload);
    return state.filter(category => category.id !== payload.id);

  default:
    return state;
  }
};
