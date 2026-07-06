function createCounter(n) {
    function hi() {
        return n++;
    };
    return hi;
}
let result = createCounter(-2);
console.log(result()); 
console.log(result()); 
console.log(result());
console.log(result());
console.log(result());
console.log(result());