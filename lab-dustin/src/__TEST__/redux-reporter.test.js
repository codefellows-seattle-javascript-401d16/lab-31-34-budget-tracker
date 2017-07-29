import {createStore, applyMiddleware} from 'redux';
import reporter from '../lib/redux-reporter';

let mockStoreCreate = () => {
  let reducer =  (state=0, action) => {
    switch (action.type) {
    case 'ERROR':
      throw new Error('test errrrrrrrrrrror');
    case 'INC':
      return state + 1;
    default:
      return state;
    }
  };
  return createStore(reducer, applyMiddleware(reporter));
};

describe('redux-reporter', () => {
  test('dispatch should return the action', () => {
    let mockStore = mockStoreCreate();
    let action = {type: 'TEST_ACTION', PAYLOAD: [3,4,5]};
    let result = mockStore.dispatch(action);
    expect(result).toEqual(action);
    expect(mockStore.getState()).toEqual(1);
  });

  // test()
});
