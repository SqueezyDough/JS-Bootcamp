// minimum

// return the minimum from 2 arguments
// b takes 0 if only 1 argument is given
function min(a, b = 0) {
    return Math.min(a, b);
}

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(0));