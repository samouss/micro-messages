import * as utils from '../utils';

jest.useFakeTimers();

describe('utils', () => {
  describe('timeoutify', () => {
    it('call the callback after default delay', () => {
      expect.assertions(3);

      const fn = jest.fn();
      const promise = utils.timeoutify().then(fn);

      expect(fn).not.toHaveBeenCalled();

      jest.runOnlyPendingTimers();

      return promise.then(() => {
        expect(fn).toHaveBeenCalled();
        expect(setTimeout.mock.calls[0][1]).toBe(1500);
      });
    });

    it('call the callback after 500ms delay', () => {
      expect.assertions(3);

      const fn = jest.fn();
      const delay = 500;
      const promise = utils.timeoutify(delay).then(fn);

      expect(fn).not.toHaveBeenCalled();

      jest.runOnlyPendingTimers();

      return promise.then(() => {
        expect(fn).toHaveBeenCalled();
        expect(setTimeout.mock.calls[1][1]).toBe(500);
      });
    });
  });
});
