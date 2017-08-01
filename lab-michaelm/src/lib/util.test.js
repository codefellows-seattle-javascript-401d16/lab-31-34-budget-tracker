import * as util from './util.js';

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
      util.log('cool', 'beans');
      expect(spy).toHaveBeenCalledWith('cool', 'beans');
      spy.mockClear();
    });

    test('log shoul not  invoke console.log when __DEBUG__ is false', () => {
      global.__DEBUG__ = false;
      const spy = jest.spyOn(console, 'log');
      util.log('cool', 'beans');
      expect(spy).not.toHaveBeenCalled();
      spy.mockClear();
    });
    test('log should invoke console.error when __DEBUG__ is true', () => {
      global.__DEBUG__ = true;
      const spy = jest.spyOn(console, 'error');
      util.logError('cool', 'beans');
      expect(spy).toHaveBeenCalledWith('cool', 'beans');
      spy.mockClear();
    });

    test('error shoul not  invoke console.error when __DEBUG__ is false', () => {
      global.__DEBUG__ = false;
      const spy = jest.spyOn(console, 'error');
      util.logError('cool', 'beans');
      expect(spy).not.toHaveBeenCalled();
      spy.mockClear();
    });
    test('should return undefined', () => {
      let  result = util.renderIf();
      expect(result).toBe(undefined);
    });

    test('should return true', () => {
      let  result = util.renderIf(true === true,{});
      expect(result).toEqual({});
    });

    test('classToggler', () => {
      let result = util.classToggler({
        'one': 1,
        'two': 2,
      });
      expect(result).toEqual('one two');
    });
  });
});
