import reducer from '../reducer/category.js';


describe('reducer', () => {
  test('testing create', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        title: 'food',
        budget: 200,
      },
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].title).toEqual('food');
    expect(reduce[0].budget).toEqual(200);
    expect(reduce[1]).toBeUndefined();
  });

  test('update', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 123,
        title: 'food',
        budget: 200,
      },
    };

    let update = {
      type: 'CATEGORY_UPDATE',
      payload: {
        id: 123,
        title: 'transportation',
        budget: 175,
      },
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].title).toEqual('food');
    expect(reduce[0].budget).toEqual(200);
    reduce = reducer(reduce, update);
    expect(reduce[0].title).toEqual('transportation');
    expect(reduce[0].budget).toEqual(175);
  });

  test('delete', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 123,
        title: 'food',
        budget: 200,
      },
    };

    let remove = {
      type: 'CATEGORY_DELETE',
      payload: {
        id: 123,
        title: 'food',
        budget: 200,
      },
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].title).toEqual('food');
    expect(reduce[0].budget).toEqual(200);
    reduce = reducer(reduce, remove);
    expect(reduce[0]).toBeUndefined();
  });

  test('reset', () => {
    let create = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: 123,
        title: 'food',
        budget: 200,
      },
    };

    let reset = {
      type: 'CATEGORY_RESET',
    };

    let reduce = reducer(reduce, create);
    expect(reduce[0].title).toEqual('food');
    expect(reduce[0].budget).toEqual(200);
    reduce = reducer(reduce, reset);
    expect(reduce[0]).toBe(undefined);
  });
});
