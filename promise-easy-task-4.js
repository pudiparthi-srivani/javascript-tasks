var cancellable = function (fn, args, t) {

    fn(...args);
    let timerId = setInterval(() => {
        fn(...args);
    }, t);
    return () => {
        clearInterval(timerId);
    };
};

const result = [];

// const fn = (x) => x * 2;
// const args = [4], t = 35, cancelTimeMs = 190;

// const fn = (x1, x2) => x1 * x2;
// const args = [2,5], t = 30, cancelTimeMs = 165;


const fn = (x1, x2, x3) => x1 + x2 + x3;
const args = [5,1,3], t = 50, cancelTimeMs = 180;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({
        time: diff,
        returned: fn(...argsArr)
    });
};

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result);
}, cancelTimeMs + t + 15);
