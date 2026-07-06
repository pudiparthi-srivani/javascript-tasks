function filter(arr, fn) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

let arr1 = [0, 10, 20, 30];
function greaterThan10(n) {
    return n > 10;
}

let arr2 = [1, 2, 3];
function firstIndex(n, i) {
    return i === 0;
}

let arr3 = [-2, -1, 0, 1, 2];
function plusOne(n) {
    return n + 1;
}

console.log("Greater Than 10:", filter(arr1, greaterThan10));
console.log("First Index:", filter(arr2, firstIndex));
console.log("Truthy Values:", filter(arr3, plusOne));