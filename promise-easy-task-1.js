var addTwoPromises = async function(promise1, promise2) {
    const result1 = await promise1;
    const result2 = await promise2;
    return result1 + result2;
    
};
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))    
addTwoPromises(promise1, promise2)
.then(console.log);

promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
addTwoPromises(promise1, promise2)
.then(console.log);