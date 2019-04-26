// flattening

let arrays = [[1, 2, 3], [4, 5], [6]];

// use reduce and concat to flatten this array
// the first array [1, 2, 3] is saved in accumulator.
// the next value [4, 5] is current value
// concat adds the next value to the accumulator until all arrays in the array are reduced and returns it as a new array in console.log
const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

console.log(arrays.reduce(reducer));