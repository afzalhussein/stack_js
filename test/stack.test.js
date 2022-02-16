var Stack = require('../src/stack');

describe('Stack tests ', ()=> {
    test('isEmpty method returns true when stack is empty', 
    ()=>{
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });
    test('isExmpty returns false when stack is not empty', ()=>{
        const stack = new Stack();
        stack.push('hello');
        expect(stack.isEmpty()).toBe(false);
    });
});


