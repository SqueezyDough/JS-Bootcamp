function range(start, end, step = 1) {
    let numbers = [];

    for (let i = start; i <= end; i += step){
        numbers.push(i);
    }
    return numbers;
}

function sum(array) {
    let sum = 0;

    for (let number of array) {
        sum += number;
    }

    return sum;
}


console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));