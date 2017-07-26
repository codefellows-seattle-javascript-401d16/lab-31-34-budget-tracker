import React from 'react';
import reducer from '../reducer/category.js';

describe('reducer', () => {
  test('initial', () => {
    let first = {
      type: null,
    };

    let reduce = reducer(undefined, first);
    expect(reduce).toEqual([]);

  });

  test('update', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 123,
        name: 'Computer',
        budget: 100,
      },
    };

    let update = {
      type: 'CATEGORY_UPDATE',
      payload: {
        id: 123,
        name: 'Computer-Mac',
        budget: 1000,
      },
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].name).toEqual('Computer');
    expect(reduce[0].budget).toEqual(100);
    reduce = reducer(reduce, update);
    expect(reduce[0].name).toEqual('Computer-Mac');
    expect(reduce[0].budget).toEqual(1000);
  });

  test('delete', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 123,
        name: 'Computer',
        budget: 100,
      },
    };

    let remove = {
      type: 'CATEGORY_DELETE',
      payload: {
        id: 123,
      },
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].name).toEqual('Computer');
    expect(reduce[0].budget).toEqual(100);
    reduce = reducer(reduce, remove);
    expect(reduce[0]).toBeUndefined();
  });

  test('reset', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 123,
        name: 'Computer',
        budget: 100,
      },
    };

    let reset = {
      type: 'CATEGORY_RESET',
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].name).toEqual('Computer');
    expect(reduce[0].budget).toEqual(100);
    reduce = reducer(reduce, reset);
    expect(reduce[0]).toBe(undefined);
    expect(reduce).toEqual([]);
  });
});
