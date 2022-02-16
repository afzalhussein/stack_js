var Stack = require("../src/stack");

describe("Stack empty", () => {
  test("isEmpty method returns true when stack is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });
  test("isEmpty returns false when stack is not empty", () => {
    const stack = new Stack();
    stack.push("hello");
    expect(stack.isEmpty()).toBe(false);
  });
  test("Empty stack size is 0", () => {
    const stack = new Stack();
    expect(stack.size).toBe(0);
  });
  test("Not Empty stack size is greater than 0", () => {
    const stack = new Stack();
    stack.push("hello");
    expect(stack.size).toBe(1);
  });
});

describe("peek", () => {
  test("peekN returns data at N location", () => {
    const stack = new Stack();
    stack.push("hello");
    expect(stack.peekN(1)).toBe("hello");
  });
  test("Peek returns element at top", () => {
    const stack = new Stack();
    stack.push("hello");
    expect(stack.peek().data).toMatch(/hello/);
    expect(stack.peek().next).toBeNull();
  });
});

describe("contains", () => {
  test("contains returns true if data exists in stack", () => {
    const stack = new Stack();
    stack.push("hello");
    expect(stack.contains("hello")).toBe(true);
  });
  test("contains returns false if data does not exist in stack", () => {
    const stack = new Stack();
    expect(stack.contains("hello")).toBeFalsy();
  });
});

describe("push", () => {
  test("passing nothing in push data throws", () => {
    const stack = new Stack();
    expect(() => stack.push()).toThrow("IllegalArgumentException");
  });
  test("size after push increases", () => {
    const stack = new Stack();
    const previous_size = stack.size;
    stack.push("hello");
    expect(stack.size).toBeGreaterThan(previous_size);
  });
});

describe("pop", () => {
  test("Pop causes error if stack is empty", () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow("Stack is empty");
  });
  test("pop deletes element at top and returns deleted element", () => {
    const stack = new Stack();
    stack.push("hello");
    expect(stack.pop()).toEqual({ _data: "hello", _next: null });
  });
  test("size after pop decreases", () => {
    const stack = new Stack();
    stack.push("hello");
    const previous_size = stack.size;
    stack.pop();
    expect(stack.size).toBeLessThan(previous_size);
  });
});
