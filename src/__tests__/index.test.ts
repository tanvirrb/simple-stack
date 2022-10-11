import Stack from '../index';

describe('Stack test suit with number', () => {
  it('should create a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('should push an item to the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.length).toBe(1);
  });

  it('should pop an item from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.length).toBe(1);
  });

  it('should peek an item from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('should return the size of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  it('should check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should clear the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.length).toBe(0);
  });

  it('should return null if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });
});

describe('Stack test suit with string', () => {
  it('should create a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('should push an item to the stack', () => {
    const stack = new Stack();
    stack.push('foo');
    expect(stack.length).toBe(1);
  });

  it('should pop an item from the stack', () => {
    const stack = new Stack();
    stack.push('foo');
    stack.push('bar');
    stack.pop();
    expect(stack.length).toBe(1);
  });

  it('should peek an item from the stack', () => {
    const stack = new Stack();
    stack.push('foo');
    stack.push('bar');
    expect(stack.peek()).toBe('bar');
  });

  it('should return the size of the stack', () => {
    const stack = new Stack();
    stack.push('foo');
    stack.push('bar');
    expect(stack.size()).toBe(2);
  });

  it('should check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should clear the stack', () => {
    const stack = new Stack();
    stack.push('foo');
    stack.push('bar');
    stack.clear();
    expect(stack.length).toBe(0);
  });

  it('should return null if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });
});

describe('Stack test suit with boolean', () => {
  it('should create a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('should push an item to the stack', () => {
    const stack = new Stack();
    stack.push(true);
    expect(stack.length).toBe(1);
  });

  it('should pop an item from the stack', () => {
    const stack = new Stack();
    stack.push(true);
    stack.push(false);
    stack.pop();
    expect(stack.length).toBe(1);
  });

  it('should peek an item from the stack', () => {
    const stack = new Stack();
    stack.push(true);
    stack.push(false);
    expect(stack.peek()).toBe(false);
  });

  it('should return the size of the stack', () => {
    const stack = new Stack();
    stack.push(true);
    stack.push(false);
    expect(stack.size()).toBe(2);
  });

  it('should check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should clear the stack', () => {
    const stack = new Stack();
    stack.push(true);
    stack.push(false);
    stack.clear();
    expect(stack.length).toBe(0);
  });

  it('should return null if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });
});

describe('Stack test suit with Buffer', () => {
  it('should create a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('should push an item to the stack', () => {
    const stack = new Stack();
    stack.push(Buffer.from('foo'));
    expect(stack.length).toBe(1);
  });

  it('should pop an item from the stack', () => {
    const stack = new Stack();
    stack.push(Buffer.from('foo'));
    stack.push(Buffer.from('bar'));
    stack.pop();
    expect(stack.length).toBe(1);
  });

  it('should peek an item from the stack', () => {
    const stack = new Stack();
    stack.push(Buffer.from('foo'));
    stack.push(Buffer.from('bar'));
    expect(stack.peek()).toStrictEqual(Buffer.from('bar'));
  });

  it('should return the size of the stack', () => {
    const stack = new Stack();
    stack.push(Buffer.from('foo'));
    stack.push(Buffer.from('bar'));
    expect(stack.size()).toBe(2);
  });

  it('should check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should clear the stack', () => {
    const stack = new Stack();
    stack.push(Buffer.from('foo'));
    stack.push(Buffer.from('bar'));
    stack.clear();
    expect(stack.length).toBe(0);
  });

  it('should return null if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });
});
