function sumseperatenumber(num) {
  return num
  .split(", ")
  .map(x => parseFloat(x))
  .reduce((sum, x) => sum + x, 0);
}
let exp = "1.5, 2.3, 3.1, 4, 5.5";
console.log(sumseperatenumber(exp));