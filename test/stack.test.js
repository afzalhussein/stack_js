var Stack = require('../src/stack');

describe('Stack tests ', ()=> {
    test('isEmpty method returns true when stack is empty', 
    ()=>{
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });
    test('isEmpty returns false when stack is not empty', ()=>{
        const stack = new Stack();
        stack.push('hello');
        expect(stack.isEmpty()).toBe(false);
    });
    test('Empty stack size is 0', ()=>{
        const stack = new Stack();
        expect(stack.size).toBe(0);
    });
    test('Not Empty stack size is greater than 0', ()=>{
        const stack = new Stack();
        stack.push('hello');
        expect(stack.size).toBe(1);
    });
    test('contains returns true if data exists in stack', ()=>{
        const stack = new Stack();
        stack.push('hello');
        expect(stack.contains('hello')).toBe(true);
    });
    test('peekN returns data at N location', ()=>{
        const stack = new Stack();
        stack.push('hello');
        expect(stack.peekN(1)).toBe('hello');
    });
    test('Peek returns element at top', ()=>{
        const stack = new Stack();
        stack.push('hello');
        expect((stack.peek()).data).toBe('hello');
        expect((stack.peek()).next).toBe(null);
    });
    test('size after push increases', ()=>{
        const stack = new Stack();
        const previous_size = stack.size;
        stack.push('hello');
        expect(stack.size).toBeGreaterThan(previous_size);
    });
    test('size after pop decreases', ()=>{
        const stack = new Stack();
        stack.push('hello');
        const previous_size = stack.size;
        stack.pop();
        expect(stack.size).toBeLessThan(previous_size);
    });
});


