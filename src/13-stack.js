/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }

  pop() {
    if (!this.arr.length) {
      return undefined;
    }
    return this.arr.pop();
  }

  peek() {
    if (!this.arr.length) {
      return undefined;
    }
    return this.arr[this.arr.length - 1];
  }
}

module.exports = Stack;
