import * as util from '../lib/util.js';

describe('util', () => {
  describe('testing loggers', () => {
    let debugCache;
    beforeAll(() => {
      if(global.__DEBUG__)
        debugCache = global.__DEBUG__;
    });

    afterAll(() => {
      global.__DEBUG__ = debugCache;
    });

    test('log should invoke console.log when __DEBUG__ is true', () => {
      global.__DEBUG__ = true;
      const spy = jest.spyOn(console, 'log');
      util.log('work', 'plz');
      expect(spy).toHaveBeenCalledWith('work', 'plz');
      spy.mockClear();
    });

    test('log shoul not  invoke console.log when __DEBUG__ is false', () => {
      global.__DEBUG__ = false;
      const spy = jest.spyOn(console, 'log');
      util.log('work', 'plz');
      expect(spy).not.toHaveBeenCalled();
      spy.mockClear();
    });
  });
});
