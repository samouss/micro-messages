// @flow

export const createMockStore = (state: Object = {}) => ({
  getState: () => state,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
});
