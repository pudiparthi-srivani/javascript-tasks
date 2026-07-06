arr = [1,2,3];
let map = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
      //  result.push(fn(arr[i], i));
    }
    return result;
};
let plusone = function(n) {
    return n + 1;
};
// let pluseI = function(n, i) {
//     return n + i;
// };
let constant = function(n) {
    return 42;
};
console.log("Plus One:", map(arr, plusone));
// console.log("Plus Index:", map(arr, plusI));
console.log("Constant:", map(arr, constant));

