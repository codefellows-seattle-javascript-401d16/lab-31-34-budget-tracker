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
        title: 'Computer',
        budget: 100,
        timestamp: new Date(),
      },
    };

    let update = {
      type: 'CATEGORY_UPDATE',
      payload: {
        id: 123,
        title: 'Computer-Mac',
        budget: 1000,
        timestamp: new Date(),
      },
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].title).toEqual('Computer');
    expect(reduce[0].budget).toEqual(100);
    reduce = reducer(reduce, update);
    expect(reduce[0].title).toEqual('Computer-Mac');
    expect(reduce[0].budget).toEqual(1000);
  });

  test('delete', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 123,
        title: 'Computer',
        budget: 100,
        timestamp: new Date(),
      },
    };

    let remove = {
      type: 'CATEGORY_DELETE',
      payload: {
        id: 123,
        title: 'Computer',
        budget: 100,
        timestamp: new Date(),
      },
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].title).toEqual('Computer');
    expect(reduce[0].budget).toEqual(100);
    reduce = reducer(reduce, remove);
    expect(reduce[0]).toBeUndefined();
  });

  test('reset', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 123,
        title: 'Computer',
        budget: 100,
        timestamp: new Date(),
      },
    };

    let reset = {
      type: 'CATEGORY_RESET',
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].title).toEqual('Computer');
    expect(reduce[0].budget).toEqual(100);
    reduce = reducer(reduce, reset);
    expect(reduce[0]).toBe(undefined);
    expect(reduce).toEqual([]);
  });
});
