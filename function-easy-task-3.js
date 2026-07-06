function once(fn) {
    let hasBeenCalled = false;

    return function (...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
             return fn(...args);
        }

        return undefined;
    };
}

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6)); 

let multiply = (a, b, c) => a * b * c;
let onceMultiply = once(multiply);
console.log(onceMultiply(5, 7, 4));
console.log(onceMultiply(2, 3, 6)); 
console.log(onceMultiply(4, 6, 8)); 