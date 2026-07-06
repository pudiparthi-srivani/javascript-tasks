// function expect(value) {
//     return {
//         toBe: function(expected) {
//             if (value === expected) {
//                 return true;
//             }
//             throw new Error("Not Equal");
//         },

//         notToBe: function(expected) {
//             if (value !== expected) {
//                 return true;
//             }
//             throw new Error("Equal");
//         }
//     };
// }
// let result = expect(2 + 3);
// console.log(result.toBe(5));
// console.log(result.notToBe(4));
// console.log(expect(5).toBe(null));
// console.log(expect(5).notToBe(null));
