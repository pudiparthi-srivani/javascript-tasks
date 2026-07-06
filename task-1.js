function sumNumbers(str) {
    return str
        .split("")
        .filter(ch => ch >= '0' && ch <= '9')
        .reduce((sum, ch) => sum + Number(ch), 0);
}

console.log(sumNumbers("foo8bar8cat2tc2"));