function reduce(nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i], i);
    }
    return result;
};
// let nums = [1, 2, 3, 4];
// let sum = reduce(nums, (acc, curr) => acc + curr, 0);
// console.log(sum); 

// let nums = [1, 2, 3, 4];
// let sum = reduce(nums, (acc, curr) => acc + curr*curr, 0);
// console.log(sum);

// let nums = [];
// let sum = reduce(nums, (acc, curr) => 0, 25);
// console.log(sum);
