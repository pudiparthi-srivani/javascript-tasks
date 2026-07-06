function createCounter(init) {
    let count = init;  
        return {
        increment: function () {
            return ++count;
        },

        decrement: function () {
            return --count;
        },

        reset: function () {
            count = init;
            return count;
        }
    };
}
const counter = createCounter(5);

console.log(counter.increment()); 
console.log(counter.reset());    
console.log(counter.decrement()); 

// const counter = createCounter(0);

// console.log(counter.increment()); 
// console.log(counter.increment()); 
// console.log(counter.decrement()); 
// console.log(counter.reset());     
// console.log(counter.reset());     