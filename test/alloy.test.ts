import alloy from '@adobe/alloy';
import { sendEvent, getInstance } from '../src/alloy';

jest.mock('@adobe/alloy', () => ({
  createInstance: jest.fn(param => {
    console.log(param);
    return jest.fn();
  }),
}));

let mockInstance: any;

describe('Alloy', () => {
  beforeEach(() => {
    mockInstance = getInstance();
  });

  /**
   * importing `../src/alloy` should initialize the instance
   * we might not want to do this, but it's how it's working right now
   */
  it('should initialize alloy on import', () => {
    expect(alloy.createInstance).toBeCalledTimes(1);
    expect(alloy.createInstance).toBeCalledWith({ name: 'alloy' });
  });

  /**
   * check to see if the alloy instance is on window.alloy
   */
  it.skip('should exist on the window object', () => {})

  it('should call the instance on sendEvent', () => {
    sendEvent({ foo: 'bar' });

    expect(mockInstance).toBeCalledTimes(1);
  });
});
