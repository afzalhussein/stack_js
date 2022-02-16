var Node = require ('./node');


class Stack {
  top = null;
  size = 0;

  isEmpty() {
    return this.top == null;
  }
  push(data) {
    if (!data) {
      throw new Error("IllegalArgumentException");
    }
    const temp = new Node();
    temp.data = data;
    temp.next = this.top;
    this.top = temp;
    this.size += 1;
  }
  peek() {
    return this.top;
  }
  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    const temp = this.top;
    this.top = this.top.next;
    this.size -= 1;
    return temp;
  }
  contains(data) {
    let result = false;
    let current = this.top;
    while (current) {
      console.log("Testing:", current.data);
      if (current.data == data) result = true;
      current = current.next;
    }
    return result;
  }
  peekN(n) {
    let current = this.top;
    let pos = 1;
    while (current) {
      if (pos == n) return current.data;
      pos += 1;
      current = current.next;
    }
    return false;
  }
}
module.exports = Stack;
