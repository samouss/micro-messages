// @flow

export const createMockStore = () => ({
  getState: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
});
