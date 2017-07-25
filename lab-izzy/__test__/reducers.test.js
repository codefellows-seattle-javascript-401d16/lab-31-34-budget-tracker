import reducer from '../reducer/category';
import * as types from '../action/category-actions.js';

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        id: 0,
        title: 'please work',
        editing: false,
      },
    ]);
  });

  it('should handle CATEGORY_CREATE', () => {
    expect(
      reducer([], {
        type: types.CATEGORY_CREATE,
        title: 'run the tests',
      })
    ).toEqual([
      {
        title: 'run the tests',
        editing: false,
        id: 0,
      },
    ]);
    expect(
      reducer(
        [
          {
            title: 'please work',
            editing: false,
            id: 0,
          },
        ],
        {
          type: types.CATEGORY_CREATE,
          title: 'run the tests',
        }
      )
    ).toEqual([
      {
        title: 'run the tests',
        editing: false,
        id: 1,
      },
      {
        title: 'please work',
        editing: false,
        id: 0,
      },
    ]);
  });
});

// console.log('categoryCreate', categoryCreate);
// const initialState = [
//   {
//     id: 2394872,
//     title: 'react is hard',
//     editing: false,
//   },
// ];
//
// export default function category(state = initialState, action) {
//   switch(action.type){
//   case CATEGORY_CREATE:
//     return [
//       {
//         id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
//         title: action.title,
//         editing: false,
//       },
//       ...state,
//     ];
//   default:
//     return state;
//   }
// }
