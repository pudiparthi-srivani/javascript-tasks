function compose(functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
}


let functions1 = [
    x => x + 1,
    x => x * x,
    x => 2 * x
];

let fn1 = compose(functions1);
console.log("Example 1:", fn1(4));


let functions2 = [
    x => 10 * x,
    x => 10 * x,
    x => 10 * x
];

let fn2 = compose(functions2);
console.log("Example 2:", fn2(1));

let functions3 = [];

let fn3 = compose(functions3);
console.log("Example 3:", fn3(42));