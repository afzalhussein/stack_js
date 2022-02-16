var Stack = require('./stack');

var stack = new Stack();
console.log('Stack is empty:', stack.top==null);
console.log('Empty stack size is 0:', stack.size==0);
console.log('Stack isEmpty returns true when empty', stack.isEmpty()==true);
stack.push('hello');
console.log('contains returns true if data exists in stack:', stack.contains('hello')==true);
console.log('peekN returns data at N location:', stack.peekN(1)=='hello');
console.log('Stack isEmpty returns false when not empty', stack.isEmpty()==false);
console.log('After push stack size is 1:', stack.size==1);
console.log(stack.top.next);
console.log(stack.top.next== null);
console.log('Peek returns element at top:', stack.peek());
console.log('Size before pop:', stack.size);
console.log('Pop deletes element at top and returns deleted element:', stack.pop());
console.log('Pop deletes element at top and size changes:', stack.size);
try {
    stack.push();
  } catch (e) {
    console.log('Passing nothing in data throws: ', e.message=="IllegalArgumentException");
  }
try{
  stack.pop();
} catch(e) {
  console.log('Pop causes error if stack is empty:', e.message=='Stack is empty');
}
console.log('contains returns false if data does not exist in stack:', stack.contains('hello')==false)