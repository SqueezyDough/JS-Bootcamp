// the sum of range

// function takes 2 arguments and will return all numbers from start to end
// third argument is optional and can be used to increase step size
function range(start, end, step = 1) {
    let numbers = [];

    for (let i = start; i <= end; i += step){
        numbers.push(i);
    }
    return numbers;
}

// takes an array with numbers and adds them together
function sum(array) {
    let sum = 0;

    for (let number of array) {
        sum += number;
    }

    return sum;
}

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));