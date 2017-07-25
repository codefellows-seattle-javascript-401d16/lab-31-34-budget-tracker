import React from 'react';
import {shallow} from 'enzyme';
import reducer from '../reducer/category.js';

describe('test', () => {
  test('should pass', () => {
    expect(true).toBe(true);
  });
});

describe('reducer', () => {
  test('create', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        name: 'Computer',
        budget: 100,
      },
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].name).toEqual('Computer');
    expect(reduce[0].budget).toEqual(100);
    expect(reduce[1]).toBeUndefined();
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
        name: 'Computer',
        budget: 100,
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
    console.log(create);
    console.log(create.payload);
    expect(reduce[0].name).toEqual('Computer');
    expect(reduce[0].budget).toEqual(100);
    reduce = reducer(reduce, reset);
    expect(reduce[0]).toBe(undefined);
  });
});
