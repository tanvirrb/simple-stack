import { Greeter } from '../index';

describe('Test Greeter', () => {
  it('should greet with the name', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
  });
});
