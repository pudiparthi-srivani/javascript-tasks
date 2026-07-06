function createHelloWorld() {
 function hi() {
    return "Hello, World!";
  };
    return hi;
}

const f = createHelloWorld();
console.log(f()); 
console.log(f({}, null, 42)); 


