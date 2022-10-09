import { StackType } from './@types';

export class Stack {
  stack: StackType[];
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item: StackType) {
    return this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.stack.length = 0;
  }
}
