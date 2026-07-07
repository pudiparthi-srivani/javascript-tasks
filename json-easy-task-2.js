var chunk = function(arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
};

const arr = [1, 2, 3, 4, 5];
const size = 1;
console.log(chunk(arr, size));

const arr2 = [1, 9, 6, 3, 2];
const size2 = 3;
console.log(chunk(arr2, size2));

const arr3 = [8, 5, 3, 2, 6];
const size3 = 6;
console.log(chunk(arr3, size3));

const arr4 = [];
const size4 = 1;
console.log(chunk(arr4, size4));